'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Postagem.belongsTo(models.Usuario,{
        foreignKey:"id_Usuarios",
        onDelete:"CASCADE"
      })
      Postagem.hasMany(models.Likes,{
        foreignKey:"id_Postagem"
      })
      Postagem.hasMany(models.Comentario,{
        foreignKey:"id_Postagem"
      })
    }
  }
  Postagem.init({
    imagem: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    id_Usuarios: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Postagem',
  });
  return Postagem;
};