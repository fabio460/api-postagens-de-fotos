const { getUser, createUser } = require('./Controllers/User_Controller')

const Routes = require('express').Router()

Routes.get('/',getUser)
Routes.post('/createUser',createUser)
module.exports = Routes