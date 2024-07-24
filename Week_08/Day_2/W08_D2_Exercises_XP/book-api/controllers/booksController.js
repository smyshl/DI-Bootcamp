const booksModel = require ('../models/booksModel.js');


module.exports = {
    getAllBooks: async (req, res) => {
        try {
            let result = await booksModel._getAllBooks();
            res.json(result);
        } catch (error) {
            res.status(404).json({"message": error.message});
        }
    },
    getBookByID: async (req, res) => {
        try {
            let { id } = req.params;
            let result = await booksModel._getBookByID(id);
            if (result.length > 0){
                res.json(result);
            } else {
                throw new Error ('Book not found')
            };
        } catch (error) {
            res.status(404).json({"message": error.message});
        }
    },
    createBook: async (req, res) => {
        let {title, author, publishedyear} = req.body;
        try {
            let result = await booksModel._createBook(title, author, publishedyear);
            res.json(result);
        } catch (error) {
            res.status(404).json({"message": error.message});
        }
    },
}