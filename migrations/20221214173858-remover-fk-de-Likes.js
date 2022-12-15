'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Likes', 'id_Postagem',  { transaction: t }),
        queryInterface.removeColumn('Likes', 'id_Usuario',  { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Likes', 'id_Postagem',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull:false
        },
        { transaction: t }),
        queryInterface.addColumn('Likes', 'id_Usuario',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull:false
        },
        { transaction: t }),
      ]);
    });
  }
};
