const { getUser, createUser, login, jwtVerify } = require('./Controllers/User_Controller')

const Routes = require('express').Router()

Routes.get('/',jwtVerify,getUser)
Routes.post('/createUser',createUser)
Routes.post('/login',login)
module.exports = Routes