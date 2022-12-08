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
        foreignKey:"id_Usuario"
      })
      Likes.belongsTo(models.Postagem,{
        foreignKey:"id_Postagem"
      })
    }
  }
  Likes.init({
    id_Postagem: DataTypes.INTEGER,
    id_Usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};