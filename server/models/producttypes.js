'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTypes = sequelize.define('ProductTypes', {
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    product_types_code: DataTypes.STRING
  }, {});
  ProductTypes.associate = function (models) {
    // associations can be defined here
    ProductTypes.belongsTo(models.Products)
    ProductTypes.hasMany(models.ProductDetails);
  };
  return ProductTypes;
};