const { getUser } = require('./Controllers/User_Controller')

const Routes = require('express').Router()

Routes.get('/',getUser)
module.exports = Routes