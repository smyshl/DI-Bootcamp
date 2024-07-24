const { _getAllPosts, _getPostById, _insertNewPost, _updatePost, _deletePost } = require ('../models/blog.model.js');


async function getAllPosts (req, res) {
    try {
        let all_posts = await _getAllPosts();
        res.json(all_posts);
    } catch (error) {
        res.status(404).json(error);
    }
};


async function getPostById (req, res) {
    let { id } = req.params;
    try {
       let post = await _getPostById(id);
       console.log(post, post.length);
        if (post.length > 0) {
            res.json(post);
        } else {
            throw new Error ('No post found')
        };
    } catch (error) {
        res.status(404).json({"message": error.message});
    }
};


async function insertNewPost (req, res) {
    try {
        let post = await _insertNewPost(req.body);
        res.json(post);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


async function updatePost (req, res) {
    let { id } = req.params;
    let { title, content } = req.body;
    try {
        let post = await _updatePost(id, title, content);
        if (post.length > 0) {
            res.json(post);
        } else {
            throw new Error ('No post found')
        };
    } catch (error) {
        res.status(404).json({"message": error.message});
    }
};


async function deletePost (req, res) {
    let { id } = req.params;
    try {
        let result = await _deletePost(id);
        if (result.length > 0) {
            res.json(result);
        } else {
            throw new Error ('No post found')
        };
    } catch (error) {
        res.status(404).json({"message": error.message});
    }
};


module.exports = {
    getAllPosts,
    getPostById,
    insertNewPost,
    updatePost,
    deletePost
}