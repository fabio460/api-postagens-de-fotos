require('dotenv').config()
const {DataTypes,Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.USER_DB,process.env.USER_DB,process.env.PASSWORD_DB,{
    host:process.env.HOST_DB,
    dialect:'postgres',
    dialectModule: require('pg')
});

module.exports=sequelize