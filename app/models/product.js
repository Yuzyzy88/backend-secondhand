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
    uid: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};