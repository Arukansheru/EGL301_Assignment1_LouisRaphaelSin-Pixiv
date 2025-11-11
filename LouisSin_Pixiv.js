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
  getArtists: () => artistList.map((p) => ({ ...p })), //Get All Artists

  findArtist(param) {
    // Find Artist using either id or name
    return artistList.find((artist) => artist.id == param || artist.name == param) ?? `Param: ${param} - Artist Not Found`; //find() returns undefined if it does not obtain a result. Hence, we use ??
  },
  addArtist: (name) => {
    artistList.push(new Artist(name.toString())); // Add a new Artist Class to artistList
    return `Artist Added - ${name}`;
  },
  deleteArtist(param) {
    //Delete an Artist
    artistId = artistList.find((artist) => artist.id == param);
    if (!artistId) return `ID: ${param} - Artist Not Found`; // If ArtistId is not found, returns error message

    artistList = artistList.filter((artist) => artist.id !== artistId); // Delete Artist using either id or name
    postList = postList.filter((post) => post.artistId !== artistId); // Delete any existing post by the Artist
    return `Artist ${param} deleted`;
  },

  //Functions for Post
  getPosts: () =>
    //Get All posts
    postList.map(
      (post) => ({ ...post, artistName: artistList.find((artist) => artist.id == post.artistId).name }) // Spread Operator to combine both the Artist Object and Post Object
    ),
  findPost: (param) => postList.find((post) => post.id == param) ?? "Post Not Found", // Find Post using ID

  addPost: (title, filename, tags, artistName) => {
    let artistId = getArtistIdByName(artistName);
    if (artistId) postList.push(new Post(title, filename, tags, artistId)); // Add a new Post Class to postList
    else return `Cannot Add Post. Artist Not Found`;
    return `Post Added for ${artistName}`;
  },

  updatePostTags(postID, newTag) {
    let post = postList.find((post) => post.id == postID); //Check if Post Exists
    if (post) post.tags.push(...(Array.isArray(newTag) ? newTag : [newTag])); // Update it's List of Tags (Can use either a single tag or Array of tags)
    else console.log("Cannot update Tag(s), as Post cannot be found");
    return { ...post }; // Returns the Update Post Class as an
  },

  deletePost: (param) => {
    postList = postList.filter((post) => post.id !== param); // Delete Post using it's Id
    return "Deleted Post";
  },

  //Custom Function(s)
  getPostsUsingArtistName(name) {
    let result = { artistName: name, posts: [] };
    postList.forEach((post) => {
      if (post.artistId == this.findArtist(name).id) result.posts.push({ ...post });
    });
    return result;
  },
};
