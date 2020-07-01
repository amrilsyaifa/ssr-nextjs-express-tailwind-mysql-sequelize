'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define('ProductDetails', {
    productTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    product_detail_code: DataTypes.STRING,
    price: DataTypes.INTEGER,
    capital_price: DataTypes.INTEGER,
    best_price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  ProductDetails.associate = function(models) {
    // associations can be defined here
  };
  return ProductDetails;
};