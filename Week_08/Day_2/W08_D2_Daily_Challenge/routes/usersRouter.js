const express = require ('express');
const userController = require ('../controllers/usersController.js')

const router = express.Router();

router.post('/register', userController.createUser);

router.get('/users/:username', userController.getUserByUsername);



module.exports = router;