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
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    tableName: 'TodoLists',
    timestamps: true,
  });

  TodoList.associate = function (models) {
    TodoList.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    TodoList.hasMany(models.Task, {
      foreignKey: 'todolist_id',
      as: 'tasks',
    });
  };

  return TodoList;
};
