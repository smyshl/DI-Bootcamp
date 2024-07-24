const { _getAllPosts } = require ('../models/blog.model.js');


async function getAllPosts (req, res) {
    try {
        let all_posts = await _getAllPosts();
        console.log(all_posts);
    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    getAllPosts
}