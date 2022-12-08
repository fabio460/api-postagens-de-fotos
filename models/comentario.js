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
        foreignKey:"id_Postagem",
        onDelete:"CASCADE"
      })
      Comentario.belongsTo(models.Usuario,{
        foreignKey:"id_Usuario",
        onDelete:"CASCADE"
      })
    }
  }
  Comentario.init({
    id_Postagem: DataTypes.INTEGER,
    body: DataTypes.STRING,
    id_Usuario:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};