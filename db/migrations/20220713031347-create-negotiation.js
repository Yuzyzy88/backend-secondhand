'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('negotiations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyer_uid: {
        type: Sequelize.TEXT
      },
      seller_uid: {
        type: Sequelize.TEXT
      },
      product_id: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('negotiations');
  }
};