const pixiv = require("./LouisSin_Pixiv.js");

console.log("Get All Posts w/ Artist Name:", pixiv.getPosts());

pixiv.addPost("Tenshi", "Tenshi.png", "OC", "Hoshi_U3");

console.log("Get Latest Post", pixiv.getLatestPost());

pixiv.updatePostTags(4, ["AI", "Angel"]);

console.log("Get 1 Post:", pixiv.getPost(4));
