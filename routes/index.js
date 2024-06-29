const express = require('express');
const userController = require('../controller/userController');
const todoListController = require('../controller/todolistController');
const taskController = require('../controller/taskController');
const tagController = require('../controller/tagController');

const router = express.Router();

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// TodoList routes
router.post('/todoLists', todoListController.createTodoList);
router.get('/todoLists/:id', todoListController.getTodoList);
router.put('/todoLists/:id', todoListController.updateTodoList);
router.delete('/todoLists/:id', todoListController.deleteTodoList);

// Task routes
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

// Tag routes
router.post('/tags', tagController.createTag);
router.get('/tags/:id', tagController.getTag);
router.put('/tags/:id', tagController.updateTag);
router.delete('/tags/:id', tagController.deleteTag);

module.exports = router;
