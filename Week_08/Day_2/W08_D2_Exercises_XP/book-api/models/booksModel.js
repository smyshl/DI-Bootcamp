const { db } = require ('../config/db.js');


module.exports = {
    _getAllBooks: async () => {
        return db('books')
        .select("id", "title", "author", "publishedyear")
        .orderBy("id");
    },
    _getBookByID: async (id) => {
        return db('books')
        .select("id", "title", "author", "publishedyear")
        .where("id", id);        
    },
    _createBook: async (title, author, publishedyear) => {
        return db('books')
        .insert({title, author, publishedyear}, ["id"])
    }
};