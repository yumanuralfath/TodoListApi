const { Task, Tag } = require('../models');
exports.createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addTagToTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    const tag = await Tag.findByPk(req.params.tagId);

    if (task && tag) {
      await task.addTag(tag);
      res.status(200).json({ message: 'Tag added to task successfully' });
    } else {
      res.status(404).json({ error: 'Task or Tag not found' });
    }
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
