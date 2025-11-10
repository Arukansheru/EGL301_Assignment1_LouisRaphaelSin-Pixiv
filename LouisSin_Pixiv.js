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
  getArtists: () =>
    //Get All Artists
    artistList.map((p) => {
      return { ...p };
    }),
  findArtist(param) {
    // Find Artist using either id or name
    let artist = artistList.find((artist) => artist.id == param || artist.name == param);
    return artist ?? `Artist Not Found`; //artist will be undefined if find() does not obtain a result
  },
  addArtist: (name) => artistList.push(new Artist(name)), // Add a new Artist Class to artistList
  deleteArtist(param) {
    //Delete an Artist
    artistId = this.findArtist(param).id;
    artistList = artistList.filter((artist) => artist.id !== artistId); // Delete Artist using either id or name
    postList = postList.filter((post) => post.artistId !== artistId); // Delete any existing post by the Artist
  },

  //Functions for Post
  getPosts: () =>
    //Get All posts
    postList.map((post) => {
      return { ...post, artistName: artistList.find((artist) => artist.id == post.artistId).name }; // Spread Operator to combine both the Artist Object and Post Object
    }),
  findPost(param) {
    // Find Post using ID
    let post = postList.find((post) => post.id == param);
    return post ?? "Post Not Found";
  },
  addPost: (title, filename, tags, artistName) => postList.push(new Post(title, filename, tags, getArtistIdByName(artistName))), // Add a new Post Class to postList
  updatePostTags(postID, newTag) {
    let post = postList.find((post) => post.id == postID); //Check if Post Exists
    if (post) post.tags.push(...(Array.isArray(newTag) ? newTag : [newTag])); // If exist, update it's List of Tags (Can use either a single tag or Array of tags)
    else console.log("Post Not Found");
  },
  deletePost: (param) => (postList = postList.filter((post) => post.id !== param)), // Delete Post using it's Id

  //Custom Functions
  getPostsUsingArtistName(name) {
    let result = {
      artistName: name,
      posts: [],
    };

    postList.forEach((post) => {
      if (post.artistId == this.findArtist(name).id) result.posts.push({ ...post });
    });
    return result;
  },
};
