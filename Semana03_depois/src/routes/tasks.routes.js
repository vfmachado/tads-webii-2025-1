
const { Router } = require('express');
const taskController = require('../controllers/tasks.controller');

const taskRouter = Router();

taskRouter.get('/', taskController.getAllTasks);
taskRouter.post('/add', taskController.addTask);
taskRouter.post('/delete/:id', taskController.deleteTask);
taskRouter.post('/toggle/:id', taskController.toggleTask);

module.exports = taskRouter;