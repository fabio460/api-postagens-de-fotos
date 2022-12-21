'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Postagem,{
        foreignKey:"id_Usuarios"
      })
      Usuario.hasMany(models.Likes,{
        foreignKey:"id_Usuarios"
      })
      Usuario.hasMany(models.Comentario,{
        foreignKey:"id_Usuarios"
      })
      Usuario.hasMany(models.seguidores,{
        foreignKey:"id_Usuarios"
      })
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    fotoDePerfil: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    proficao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};