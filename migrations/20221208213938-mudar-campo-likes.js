'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Likes', 'id_Usuarios', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Usuarios',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t }),
        queryInterface.addColumn('Comentarios', 'id_Usuarios', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Usuarios',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t }),

        queryInterface.addColumn('Likes', 'id_Postagems', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Postagems',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t }),
        queryInterface.addColumn('Comentarios', 'id_Postagems', {
          type: Sequelize.DataTypes.INTEGER,
          references:{model:'Postagems',key:'id'},
          onDelete:"CASCADE"
        }, { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Likes', 'id_Usuarios', { transaction: t }),
        queryInterface.removeColumn('Comentarios', 'id_Usuarios', { transaction: t })
      ]);
    });
  }
};
