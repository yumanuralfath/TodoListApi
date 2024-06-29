module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    todoListId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TodoLists',
        key: 'id',
      },
    },
  });
  Task.associate = function (models) {
    Task.belongsTo(models.TodoList, {
      foreignKey: 'todoListId',
      as: 'todoList',
    });
    Task.belongsToMany(models.Tag, {
      through: 'Task_Tag',
      foreignKey: 'taskId',
      otherKey: 'tagId',
      as: 'tags',
    });
  };
  return Task;
};
