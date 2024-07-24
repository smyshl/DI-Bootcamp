const { getAllPosts, getPostById, insertNewPost, updatePost, deletePost } = require ('../controllers/blog.controller.js');
const express = require ('express');

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPostById);

router.post('/', insertNewPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost)



// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.

// DELETE /posts/:id: Delete a blog post.

module.exports = router;