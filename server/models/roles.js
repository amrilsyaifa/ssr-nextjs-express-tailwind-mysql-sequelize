'use strict';

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING
  }, {});
  Roles.associate = function (models) {
    Roles.belongsToMany(models.Users, { through: 'UsersRoles' });
  };
  return Roles;
};