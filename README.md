# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Module Functions
- getPosts()

    Return Type: Object[]

    This function returns an Array of all the Posts, it also includes the Post Artist's Name.


- getPost(postID)

    Return Type: Object

    Similar to ```getPosts()```, but uses a parameter of a 
    Posts's ID to search for one post.


- getLatestPost()

    Return Type: Object

    Gets the most recently added post using the largest id.


- addPost(title, filename, tags, artistName)

    Return Type: N.A.

    Uses 4 Parameters when adding a new post
    

        title: String,
        
        filename: String,
        
        tags: String or String[],
        
        artistName: String


- updatePostTags(postID, newTag)

# References
Provide the references that you have used to support your assignment. 