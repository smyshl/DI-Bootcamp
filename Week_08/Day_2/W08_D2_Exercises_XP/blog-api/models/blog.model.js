const { dbase } = require ("../config/db.js");


const _getAllPosts = () => {
    return dbase("posts").select("id", "title", "content").orderBy("id");
};








module.exports = {
    _getAllPosts,
}