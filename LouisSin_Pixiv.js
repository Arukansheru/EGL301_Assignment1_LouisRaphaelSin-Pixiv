//I would use Classes for Artist + Posts, but a bit lazy ^w^
let artists = [
  { id: 1, name: "Hoshi_U3" },
  { id: 2, name: "Sco_ttie" },
  { id: 3, name: "ATDAN" },
  { id: 4, name: "gosari" },
];

let posts = [
  { id: 1, title: "Sparkle_Hanabi", filename: "sparklehanabi.png", tags: ["Honkai Star Rail", "Sparkle"], artistId: 2 },
  { id: 2, title: "Nya~", filename: "cute.png", tags: ["OC", "Cute"], artistId: 1 }, //OC = Original Character
  { id: 3, title: "Noshiro", filename: "Noshiro.png", tags: ["Azur Lane", "Noshiro"], artistId: 3 },
  { id: 4, title: "Columbina", filename: "columbina.png", tags: ["Genshin Impact"], artistId: 4 },
];

module.exports = {
  getPosts() {
    //Get ALL posts with post's artist
    return posts.map((post) => {
      return { ...post, artistName: artists.find((artist) => artist.id == post.artistId).name }; //Spread Operator to combine both the Artist Object and Post Object
    });
  },
  getPost(postID) {
    //Get 1 post using postID
    return posts.find((post) => post.id === postID);
  },
  getLatestPost: () => posts.find((post) => post.id == posts.length), //Get the latest post using largest ID (This is the only Arrow Function)
  addPost(title, filename, tags, artistName) {
    //Add a new post
    posts.push({
      id: posts.length + 1,
      title,
      filename,
      tags: Array.isArray(tags) ? tags : [tags], //Ensures that tags is an Array at all times for the updatePostTags() works, as .push() requires an Array. When a single tag string is used in the new post
      artistId: artists.find((artist) => artist.name == artistName).id, //Finds artist by name to get their ID
    });
  },
  updatePostTags(postID, newTag) {
    this.getPost(postID).tags.push(...(Array.isArray(newTag) ? newTag : [newTag])); //Update 1 Post's List of Tags (Can use either a single variable or Array of variables)
  },
};
