'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fromId: {
        type: Sequelize.STRING
      },
      toId: {
        type: Sequelize.STRING
      },
      readStatus: {
        type: Sequelize.BOOLEAN
      },
      date: {
        type: Sequelize.DATE
      },
      productName: {
        type: Sequelize.STRING
      },
      productPrice: {
        type: Sequelize.STRING
      },
      negotiatePrice: {
        type: Sequelize.STRING
      },
      imgurl: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('notifications');
  }
};