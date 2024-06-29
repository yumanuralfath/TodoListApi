module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Tags',
    timestamps: false,
  });

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Task, {
      through: 'Task_Tag',
      foreignKey: 'tag_id',
      otherKey: 'task_id',
      as: 'tasks',
    });
  };

  return Tag;
};
