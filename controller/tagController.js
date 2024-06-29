const Task = require('../models/TaskModel');
const Tag = require('../models/TagModel');

exports.createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTag = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Task, as: 'tasks' }],
    });
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      await tag.update(req.body);
      res.json(tag);
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      await tag.destroy();
      res.json({ message: 'Tag deleted successfully' });
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
