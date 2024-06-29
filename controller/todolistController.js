const TodoList = require('../models/TodoListModel');
const Task = require('../models/TaskModel');

exports.createTodoList = async (req, res) => {
  try {
    const todoList = await TodoList.create(req.body);
    res.status(201).json(todoList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTodoList = async (req, res) => {
  try {
    const todoList = await TodoList.findByPk(req.params.id, {
      include: [{ model: Task, as: 'tasks' }],
    });
    if (todoList) {
      res.json(todoList);
    } else {
      res.status(404).json({ error: 'TodoList not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTodoList = async (req, res) => {
  try {
    const todoList = await TodoList.findByPk(req.params.id);
    if (todoList) {
      await todoList.update(req.body);  
      res.json(todoList);
    } else {
      res.status(404).json({ error: 'TodoList not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTodoList = async (req, res) => {
  try {
    const todoList = await TodoList.findByPk(req.params.id);
    if (todoList) {
      await todoList.destroy();
      res.json({ message: 'TodoList deleted successfully' });
    } else {
      res.status(404).json({ error: 'TodoList not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

