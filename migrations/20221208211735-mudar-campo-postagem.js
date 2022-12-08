'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Postagems', 'id_Usuarios', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Usuarios',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t }),
       
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Postagems', 'id_Usuarios', { transaction: t }),
       
      ]);
    });
  }
};
