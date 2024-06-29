module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  });
  TodoList.associate = function (models) {
    TodoList.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    TodoList.hasMany(models.Task, {
      foreignKey: 'todoListId',
      as: 'tasks',
    });
  };
  return TodoList;
};
