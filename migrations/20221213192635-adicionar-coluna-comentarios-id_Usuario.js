'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.addColumn('Comentarios', 'id_Postagems', {
        //   type: Sequelize.DataTypes.STRING,
        //   references:{model:'Postagems',key:'id'},
        //   onDelete:"CASCADE"
        // }, { transaction: t }),
        queryInterface.addColumn('Comentarios', 'id_Usuario', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Usuarios',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.removeColumn('Comentarios', 'id_Postagems', { transaction: t }),
        queryInterface.removeColumn('Comentarios', 'id_Usuario', { transaction: t })
      ]);
    });
  }
};
