'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seguidores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seguidores.belongsTo(models.Usuario,{
        foreignKey:'id_Usuarios',
        onDelete:'CASCADE'
      })
      seguidores.belongsTo(models.Usuario,{
        foreignKey:'id_Seguidor',
        onDelete:"CASCADE"  
      })
    }
  }
  seguidores.init({
    id_Usuarios: DataTypes.INTEGER,
    id_Seguidor:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'seguidores',
  });
  return seguidores;
};