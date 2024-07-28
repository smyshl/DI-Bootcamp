const express = require ('express');
const userController = require ('../controllers/usersController.js');

const router = express.Router();

router.post('/register', userController.createUser);

router.get('/users/name/:username', userController.getUserByUsername);

router.post('/login', userController.login);

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.put('/users/:id', userController.updateUser)


module.exports = router;