const fs = require('fs');
require('dotenv').config()
module.exports =
{
  "development": {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.BANC_DB,
    host: process.env.HOST_DB,
    dialect: "postgres",

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
