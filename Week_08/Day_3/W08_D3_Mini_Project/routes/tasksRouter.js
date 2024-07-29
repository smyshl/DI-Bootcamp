const express = require ('express');
const tasksControllers = require ('../controllers/tasksControllers.js');

const router = express.Router();

router.post('/', tasksControllers.createTask);

router.get('/', tasksControllers.getAllTasks);

router.get('/:id', tasksControllers.getTaskById);

router.put('/:id', tasksControllers.updateTask);

module.exports = router;