const express = require('express');
const booksController = require('../controllers/booksController.js');

const router = express.Router();

router.get('/', booksController.getAllBooks);

router.get('/:id', booksController.getBookByID);

router.post('/', booksController.createBook);

module.exports = router;