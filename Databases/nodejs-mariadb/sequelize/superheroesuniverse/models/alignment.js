'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alignment = sequelize.define('alignment', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  Alignment.associate = (models) => {
    // associations can be defined here
  };
  return Alignment;
};
