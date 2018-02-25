'use strict';
module.exports = (sequelize, DataTypes) => {
  const Superhero = sequelize.define('superheroe', {
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: {
          args: [3, 60],
          msg: 'Name must be between 3 and 60 characters long',
        },
      },
    },
    secret_identity: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 20],
          msg: 'Secret Identity must be between 3 and 20 characters long',
        },
      },
    },
    story: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    alignment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Superhero.associate = (models) => {
    const {
      Alignment,
    } = models;
    Superhero.belongsTo(Alignment);
  };
  return Superhero;
};
