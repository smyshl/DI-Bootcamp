const { dbase } = require ("../config/db.js");


const _getAllPosts = () => {
    return dbase("blog").select("id", "title", "content").orderBy("id");
};








module.exports = {
    _getAllPosts,
}