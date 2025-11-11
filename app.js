const pixiv = require("./LouisSin_Pixiv.js");

//Test Artist Functions
pixiv.addArtist("Tsumugi");
console.log(pixiv.deleteArtist(3));

console.log("Get All Artists:", pixiv.getArtists());
console.log("Searching for Artist using Parameters:", pixiv.findArtist("Hoshi_U3"));

//Test Post Functions
console.log(pixiv.addPost("Tenshi", "Tenshi.png", "OC", "Hoshi_U3"));
console.log(pixiv.updatePostTags(4, ["AI", "Angel"]));
pixiv.deletePost(2);

console.log("Get All Posts w/ Artist Name:", pixiv.getPosts());
console.log("Searching for Post using Parameters:", pixiv.findPost(4));

//Custom Fuction
console.log(pixiv.getPostsUsingArtistName("Hoshi_U3"));
