'use strict';
module.exports = (sequelize, DataTypes) => {
  const jabbers = sequelize.define('jabbers', {
    jid: DataTypes.STRING,
    password: DataTypes.STRING,
    host: DataTypes.STRING,
    port: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  jabbers.associate = function (models) {
    // associations can be defined here
    jabbers.belongsTo(models.users)
  };
  return jabbers;
};