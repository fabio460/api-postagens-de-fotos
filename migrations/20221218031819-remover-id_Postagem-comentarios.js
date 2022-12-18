'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Comentarios', 'id_Postagem',  { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Comentarios', 'id_Postagem',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull:false
        },
        { transaction: t }),
      ]);
    });
  }
};
