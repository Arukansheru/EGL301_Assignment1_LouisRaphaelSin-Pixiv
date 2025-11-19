class Artist {
  static #id = 1;

  constructor(name) {
    this.id = Artist.#id++; // Auto Generate a new ID
    this.name = name;
  }
}
class Post {
  static #id = 1;

  constructor(title, filename, tags, artistId) {
    this.id = Post.#id++; // Auto Generate a new ID
    this.title = title;
    this.filename = filename;
    this.tags = Array.isArray(tags) ? tags : [tags]; //Ensures that tags is an Array at all times.
    this.artistId = artistId;
  }
}

function getArtistIdByName(name) {
  return artistList.find((artist) => artist.name === name)?.id;
}

let artistList = [new Artist("Hoshi_U3"), new Artist("Sco_ttie"), new Artist("ATDAN"), new Artist("gosari")];
let postList = [
  new Post("Nya~", "sparklehanabi.png", ["OC", "Cute"], getArtistIdByName("Hoshi_U3")),
  new Post("Sparkle_Hanabi", "sparklehanabi.png", ["Honkai Star Rail", "Sparkle"], getArtistIdByName("Sco_ttie")),
  new Post("Noshiro", "noshiro.png", ["Azur Lane", "Noshiro"], getArtistIdByName("ATDAN")),
  new Post("Columbina", "columbina.png", ["Genshin Impact", "Columbina"], getArtistIdByName("gosari")),
];

module.exports = {
  //Functions for Artist

  //Get All Artists
  getArtists: () => artistList.map((p) => ({ ...p })),

  //Find Artist using either id or name
  findArtist: (param) => {
    let artist = artistList.find((artist) => artist.id == param || artist.name == param);

    if (artist) return artist;
    else throw new Error(`Artist Not Found: Cannot find Artist with id or name - ${param}`);
  },

  //Add Artist using Name
  addArtist: (name) => {
    artistList.push(new Artist(name.toString())); //Creates a new Artist Class and adds it to artistList
    return { message: `Artist Added - ${name}` };
  },

  //Delete an Artist - Using either Id or Name
  deleteArtist(param) {
    artistObj = artistList.find((artist) => artist.id == param || artist.name == param);
    if (!artistObj) throw new Error(`Artist Not Found: Cannot delete Artist with id or name - ${param}`); // If ArtistId is not found, returns error message

    artistList = artistList.filter((artist) => artist.id !== artistObj.id); // Delete Artist using either id or name
    postList = postList.filter((post) => post.artistId !== artistObj.id); // Delete any existing post by the Artist
    return { message: `Artist ${param} deleted` };
  },

  //Functions for Post

  //Get All posts
  getPosts: () => postList.map((post) => ({ ...post, artistName: artistList.find((artist) => artist.id == post.artistId).name })), // Spread Operator to combine both the Artist Object and Post Object

  //Find Post using ID
  findPost: (param) => {
    let post = postList.find((post) => post.id == param);

    if (post) return post;
    else throw new Error(`Post Not Found: Cannot find Post with id - ${param}`);
  },

  // Add a new Post
  addPost: (title, filename, tags, artistName) => {
    let artistId = getArtistIdByName(artistName);
    if (artistId) postList.push(new Post(title, filename, tags, artistId)); // Add a new Post Class to postList
    else throw new Error(`Post Not Found: Cannot find Post of Artist with name - ${artistName}`);
    return { message: `Post Added for ${artistName}` };
  },

  //Update tags of a post (Can use either a single tag or Array of tags)
  updatePostTags(postID, newTag) {
    let post = postList.find((post) => post.id == postID); //Check if Post Exists

    if (post) post.tags.push(...(Array.isArray(newTag) ? newTag : [newTag]));
    else throw new Error(`Post Not Found: Cannot find Post with id - ${postID}`);
    return { ...post }; // Returns the Updated Post Class as an Object
  },

  //Delete Post using ID
  deletePost: (postID) => {
    postList = postList.filter((post) => post.id !== postID);
    return { message: "Post Has Been Deleted" };
  },

  //Custom Function(s)
  getPostsUsingArtistName(name) {
    let result = { artistName: name, posts: [] };
    let artist = this.findArtist(name);

    postList.forEach((post) => {
      if (post.artistId == artist.id) result.posts.push({ ...post });
    });
    return result;
  },
};
