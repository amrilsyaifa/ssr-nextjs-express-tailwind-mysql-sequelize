'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i
    },
    // password: DataTypes.STRING,
    id_card_number: DataTypes.STRING,
    full_name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    address: DataTypes.STRING,
    token_permanent: DataTypes.STRING(1234),
    lastLogin: DataTypes.DATE,
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
    Users.belongsToMany(models.Roles, { through: 'UsersRoles' });
  };
  return Users;
};