/**Exercise 1: Building a RESTful API
Instructions
You’re tasked with building a RESTful API for a blog platform.
Users should be able to create, read, update, and delete blog posts using different endpoints.
    Create a directory named blog-api.
    Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
    Install the express package by running npm install express in the terminal.
    Create a file named server.js.
    In server.js, require the express package and set up an Express app.
    Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
    Implement the following routes using Express:
        GET /posts: Return a list of all blog posts.
        GET /posts/:id: Return a specific blog post based on its id.
        POST /posts: Create a new blog post.
        PUT /posts/:id: Update an existing blog post.
        DELETE /posts/:id: Delete a blog post.
    Implement error handling for invalid routes and server errors.
    Start the Express app and listen on a specified port (e.g., 3000).
*/

const express = require('express');

const app = express();

let blog_posts = [
    {"id": 1, "title": "What we did last summer", "content": "content about the past"},
    {"id": 2, "title": "What we're doing this summer", "content": "content about present time"},
    {"id": 3, "title": "What we'll do next summer", "content": "content about the future"}
];


app.listen(5000, () => {
    console.log("server is running on port:5000");
});

app.use(express.json());


app.get('/posts', (req, res) => {
    res.json(blog_posts)
});


app.get('/posts/:id', (req, res) => {
    requested_id = Number(req.params.id);
    requested_post = blog_posts.find((post => post.id === requested_id));
    if (!requested_post) return res.send(404, `No product with id ${requested_id}`);
    res.json(requested_post);
});


app.post('/posts', (req, res) => {
    let new_id = Number(blog_posts.at(-1).id + 1);
    let new_post = {
        id: new_id,
        title: req.body.title,
        content: req.body.content
    };
    blog_posts.push(new_post);
    res.status(201).json(new_post);
    console.log(blog_posts);
});


app.put('/posts/:id', (req, res) => {
    requested_id = Number(req.params.id);
    requested_post_index = blog_posts.findIndex((post => post.id === requested_id));
    if (requested_post_index == -1) return res.status(404).send(`Got a PUT request. No product with id ${requested_id}`);

    let updated_post = {
        id: requested_id,
        title: req.body.title,
        content: req.body.content
    };

    blog_posts[requested_post_index] = updated_post;

    res.status(200).json(updated_post);
    console.log(blog_posts);
});


app.delete('/posts/:id', (req, res) => {
    requested_id = Number(req.params.id);
    requested_post_index = blog_posts.findIndex((post => post.id === requested_id));
    if (requested_post_index == -1) return res.status(404).send(`Got a PUT request. No product with id ${requested_id}`);

    blog_posts.splice(requested_post_index, 1);

    res.status(200).json("Post deleted");
    console.log(blog_posts);
});


app.get("*", (req, res) => {
  res.send("404 this page doesn't exist");
});