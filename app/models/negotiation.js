'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class negotiation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  negotiation.init({
    buyer_uid: DataTypes.TEXT,
    seller_uid: DataTypes.TEXT,
    product_id: DataTypes.TEXT,
    price: DataTypes.TEXT,
    isApproved: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'negotiation',
  });
  return negotiation;
};