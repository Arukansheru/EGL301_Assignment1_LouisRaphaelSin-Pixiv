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

  Retrieves the list of all stored artists.

      Parameters: None

      Return Type: Object[]

- **`findArtist(param)`**

  Searches for a specific artist by their ID or Name.

      Parameters:

          param (String | Number): The Name or ID of the artist.

      Return Type: Object

      Throws: Error if the artist is not found.

- **`addArtist(name)`**

  Adds a new artist to the database.

      Parameters:

          name (String): The name of the new artist.

      Return Type: Object

      Example Return:

        { message: `Artist Added - [name]` }

- **`deleteArtist(id)`**

  Deletes an artist and recursively deletes all posts associated with that artist.

      Parameters:

        param (String | Number): The Name or ID of the artist to delete.

      Return Type: Object

      Throws: Error if the artist is not found.

      Example Return:

        { "message": "Artist [param] deleted" }

  Note: Deleting an Artist will delete ALL POSTS by the Artist!
  <br>

  <hr>

- **`getPosts()`**

  Retrieves all posts.

      Parameters: None

      Return Type: Object[]

      Description: Returns an array of post objects.

  Note: This function automatically joins the data, adding an artistName property to every post object for easier reading.

- **`findPost(param)`**

  Searches for a specific post by its ID.

      Parameters:

          param (Number): The unique ID of the post.

      Return Type: Object

      Throws: Error if the post is not found.

- **`addPost(title, filename, tags, artistName)`**

  Creates a new post and links it to an existing artist.

      Parameters:

          title (String): The post title.

          filename (String): The file name (e.g., "image.png").

          tags (String | String[]): A single tag string or an array of strings.

          artistName (String): The name of the artist (must exist in the database).

      Return Type: Object

      Throws: Error if the artistName is not found.

      Example Return:

        { "message": "Post Added for [artistName]" }

- **`updatePostTags(postID, newTag)`**

  Appends new tags to an existing post.

      Parameters:

          postID (Number): The ID of the post to update.

          newTag (String | String[]): The new tag(s) to add.

      Return Type: Object

      Throws: Error if the post is not found.

      Description: Returns the updated Post object containing the new tags.

- **`deletePost(postID)`**

  Removes a specific post from the database.

      Parameters:

        postID (Number): The ID of the post to delete.

      Return Type: Object

      Example Return:

        { "message": "Post Has Been Deleted" }

- **`getPostsUsingArtistName(name)`**

  Finds all posts belonging to a specific artist.

      Parameters:

        name (String): The name of the artist.

      Return Type: Object

      Return Structure:

        {
          "artistName": "[name]",
          "posts": [ ...Array of Post Objects ]
        }

# References

(Social Media) Reference Website: https://www.pixiv.net/en/
