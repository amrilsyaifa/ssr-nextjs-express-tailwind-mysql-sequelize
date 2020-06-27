'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersRoles = sequelize.define('UsersRoles', {
    UserId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {});
  UsersRoles.associate = function (models) {
    // associations can be defined here
  };
  return UsersRoles;
};