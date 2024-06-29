module.exports = (sequelize, DataTypes) => {
  const Task_Tag = sequelize.define('Task_Tag', {
    taskId: {
      type: DataTypes.INTEGER,
      field: 'task_id',
      references: {
        model: 'Tasks',
        key: 'id',
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      field: 'tag_id',
      references: {
        model: 'Tags',
        key: 'id',
      },
    },
  }, {
    tableName: 'Task_Tag',
    timestamps: false,
  });

  return Task_Tag;
};
