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
      field: 'due_date',
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
    todoListId: {
      type: DataTypes.INTEGER,
      field: 'todolist_id',
      references: {
        model: 'TodoLists',
        key: 'id',
      },
    },
  }, {
    tableName: 'Tasks',
    timestamps: true,
  });

  Task.associate = function (models) {
    Task.belongsTo(models.TodoList, {
      foreignKey: 'todolist_id',
      as: 'todoList',
    });
    Task.belongsToMany(models.Tag, {
      through: 'Task_Tag',
      foreignKey: 'task_id',
      otherKey: 'tag_id',
      as: 'tags',
    });
  };

  return Task;
};
