'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    product_code: DataTypes.STRING
  }, {});
  Products.associate = function (models) {
    // associations can be defined here
    Products.hasMany(models.ProductTypes);
  };
  return Products;
};