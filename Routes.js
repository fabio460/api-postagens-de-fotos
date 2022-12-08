const { createPost, listPost } = require('./Controllers/Post_Controller')
const { getUser, createUser, login, jwtVerify, getUsers } = require('./Controllers/User_Controller')
const {getLikes, setLikes} = require('./Controllers/Likes_Controller')
const Routes = require('express').Router()

Routes.get('/',getUsers)
Routes.post('/createUser',createUser)
Routes.post('/login',login)
Routes.get('/getLikes',getLikes)
Routes.post('/setLikes',setLikes)
Routes.post('/createPostagem',createPost)
Routes.get('/listPost',listPost)
Routes.post('/getUser',getUser)
module.exports = Routes