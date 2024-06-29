const express = require('express');
const userController = require('../controller/userController');
const todoListController = require('../controllers/todoListController');
const taskController = require('../controllers/taskController');
const tagController = require('../controllers/tagController');

const router = express.Router();

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);

// TodoList routes
router.post('/todoLists', todoListController.createTodoList);
router.get('/todoLists/:id', todoListController.getTodoList);

// Task routes
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTask);

// Tag routes
router.post('/tags', tagController.createTag);
router.get('/tags/:id', tagController.getTag);

module.exports = router;
