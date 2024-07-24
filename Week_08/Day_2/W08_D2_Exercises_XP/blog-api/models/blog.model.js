const { dbase } = require ("../config/db.js");


const _getAllPosts = () => {
    return dbase("posts").select("id", "title", "content").orderBy("id");
};


const _getPostById = (postId) => {
    return dbase("posts").select("id", "title", "content").where('id', postId);
};


const _insertNewPost = (newPost) => {
    return dbase("posts").insert(newPost, ["id", "title", "content"]);
};


const _updatePost = (postId, title, content) => {
    return dbase("posts").where("id", postId).update({title, content}, ["id", "title", "content"]);
};


const _deletePost = (postId) => {
    return dbase("posts").where("id", postId).del(["id", "title", "content"]);
};




module.exports = {
    _getAllPosts,
    _getPostById,
    _insertNewPost,
    _updatePost,
    _deletePost
}