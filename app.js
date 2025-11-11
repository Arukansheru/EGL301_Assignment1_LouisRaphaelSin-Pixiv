const pixiv = require("./LouisSin_Pixiv.js");

//Test Artist Functions
pixiv.addArtist(true);
pixiv.deleteArtist(10);

console.log("Get All Artists:", pixiv.getArtists());
console.log("Searching for Artist using Parameters:", pixiv.findArtist("Hoshi_U3"));

//Test Post Functions
pixiv.addPost("Tenshi", "Tenshi.png", "OC", "Hoshi_U3");
pixiv.updatePostTags(4, ["AI", "Angel"]);
pixiv.deletePost(2);

console.log("Get All Posts w/ Artist Name:", pixiv.getPosts());
console.log("Searching for Post using Parameters:", pixiv.findPost(4));

//Custom Fuction
console.log(pixiv.getPostsUsingArtistName("Hoshi_U3"));
