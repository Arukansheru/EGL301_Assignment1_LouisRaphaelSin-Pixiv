# Assignment 1

## Description

Using Pixiv as a reference, this node module is built around the commonly found features within Pixiv.

You may find the usable functions under **Module Functions**
You may find a website link under **References**

## Installation

Just import or require the file into your Node.js project.<br>
`const pixiv = require("./LouisSin_Pixiv.js")`<br>
There is no need to do `npm i`<br>

There is an existing List of Artists and Posts for you to mess around with.

## Module Functions

- **`getArtists()`**

  Return Type: Object[]

  This function returns an Array of all the Artists.

- **`findArtist(param)`**

  Return Type: Object

  Uses 1 parameter when searching for an artist. Which can either be the artist name or id

      param: String or Int,

- **`addArtist(name)`**

  Return Type: String

  Uses 1 parameter when adding a new artist

      name: String,

- **`deleteArtist(id)`**

  Return Type: String

  Uses 1 parameter when deleting an artist. Which can either be the artist name or id

        param: String or Int

  Note: Deleting an Artist will delete ALL POSTS by the Artist!
  <br>

- **`getPosts()`**

  Return Type: Object[]

  This function returns an Array of all the Posts, it also includes the Artist's Details.

- **`findPost(param)`**

  Return Type: Object

  Uses 1 parameter when searching for a post.

      param: String

- **`addPost(title, filename, tags, artistName)`**

  Return Type: String

  Uses 4 Parameters when adding a new post

      title: String,
      filename: String,
      tags: String or String[],
      artistName: String

- **`updatePostTags(postID, newTag)`**

  Return Type: Object

  Uses 2 Parameters when updating a post's tags

      postID: int,
      newTag: String or String[]

  For newTag, you may use either a single tag (one string) or multiple tags (an array of strings)

- **`deletePost(postID)`**

  Return Type: String

  Uses 1 parameter when deleting a post.

      param: int

- **`getPostsUsingArtistName(name)`**

  Return Type: Object

  Uses 1 parameter when finding posts from a specific artist

      name: String

# References

(Social Media) Reference Website: https://www.pixiv.net/en/
