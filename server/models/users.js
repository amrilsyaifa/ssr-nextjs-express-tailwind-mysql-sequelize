'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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
  }, {});
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.jabbers)
  };
  return users;
};