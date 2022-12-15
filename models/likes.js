'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Likes.belongsTo(models.Usuario,{
        foreignKey:"id_Usuarios",
        onDelete:"CASCADE"
      })
      Likes.belongsTo(models.Postagem,{
        foreignKey:"id_Postagems",
        onDelete:"CASCADE"
      })
    }
  }
  Likes.init({
    id_Postagems: DataTypes.INTEGER,
    id_Usuarios: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};