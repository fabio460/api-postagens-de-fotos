'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seguidores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Usuarios: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Usuarios",key:"id"},
        onDelete:"CASCADE"
      },
      id_Seguidor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Usuarios",key:"id"},
        onDelete:"CASCADE"
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
    await queryInterface.dropTable('seguidores');
  }
};