'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    pid: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.STRING,
    create: DataTypes.DATE,
    update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};