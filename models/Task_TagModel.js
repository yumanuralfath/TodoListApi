module.exports = (sequelize, DataTypes) => {
  const Task_Tag = sequelize.define('Task_Tag', {
    taskId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tasks',
        key: 'id',
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tags',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });
  return Task_Tag;
};
