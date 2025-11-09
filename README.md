# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Description

Using Pixiv as a reference, this node module is built around the commonly found features within Pixiv.

You may find the usable functions under **Module Functions**<br>
You may find a website link under **References**

## Installation

Just import or require the file into your Node.js project. There is no need to do `npm i`
There already is an existing List of Artists and Posts you may mess around with.

## Module Functions

- `getArtists()`

  Return Type: Object[]

  This function returns an Array of all the Artists.

- `findArtist(param)`

  Return Type: Object

  Uses 1 parameter when searching for an artist. Which can either be the artist name or id

      param: String or Int,

- `addArtist(name)`

  Return Type: None

  Uses 1 parameter when adding a new artist

      name: String,

- `deleteArtist(param)`

  Return Type: None

  Uses 1 parameter when deleting an artist. Which can either be the artist name or id

      param: String or Int

- `getPosts()`

  Return Type: Object[]

  This function returns an Array of all the Posts, it also includes the Artist's Details.

- `getPost(param)`

  Return Type: Object

  Uses 1 parameter when searching for a post.

      param: String

- `addPost(title, filename, tags, artistName)`

  Return Type: None

  Uses 4 Parameters when adding a new post

      title: String,<br>
      filename: String,<br>
      tags: String or String[],<br>
      artistName: String

- `updatePostTags(postID, newTag)`

  Return Type: None

  Uses 2 Parameters when updating a post's tags

      postID: int,<br>
      newTag: String or String[]

  For newTag, you may use either a single tag (one string) or multiple tags (an array of strings)

- `deleteArtist(param)`

  Return Type: None

  Uses 1 parameter when deleting a post.

      param: int

# References

Provide the references that you have used to support your assignment.

(Social Media) Reference Website: https://www.pixiv.net/en/
