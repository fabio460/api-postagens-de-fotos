'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Postagem,{
        foreignKey:"id_Postagems",
        onDelete:"CASCADE"
      })
      Comentario.belongsTo(models.Usuario,{
        foreignKey:"id_Usuarios",
        onDelete:"CASCADE"
      })
    }
  }
  Comentario.init({
    id_Postagems: DataTypes.INTEGER,
    body: DataTypes.STRING,
    id_Usuarios:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};