require('dotenv').config()
const {DataTypes,Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.USER_DB,process.env.USER_DB,process.env.PASSWORD_DB,{
    host:process.env.HOST_DB,
    dialect:process.env.DIALECT_DB,
    // dialectModule: require('mysql2')
});

module.exports=sequelize