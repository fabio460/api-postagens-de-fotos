const { createPost, listPost, deletePost, updatePost, getPostById } = require('./Controllers/Post_Controller')
const { getUser, createUser, login, jwtVerify, getUsers, deleteUser, updateUser, UpdateUser, UpdateUsers, UpdateImagePerfil } = require('./Controllers/User_Controller')
const {getLikes, setLikes} = require('./Controllers/Likes_Controller')
const { setComentarios,getComentarios, updateComentarios, deleteComentarios } = require('./Controllers/Comentarios_Controller')
const { getSeguidores, Seguir } = require('./Controllers/Seguidores_Controler')
const Routes = require('express').Router()

Routes.get('/',getUsers)
Routes.post('/createUser',createUser)
Routes.post('/login',login)
Routes.get('/getLikes',getLikes)
Routes.post('/setLikes',setLikes)
Routes.post('/createPostagem',createPost)
Routes.get('/listPost',listPost)
Routes.get('/listUsers',jwtVerify,getUsers)
Routes.post('/getUser',getUser)
Routes.post('/setComentarios',setComentarios)
Routes.post('/getComentarios',getComentarios)
Routes.put('/updateComentarios',updateComentarios)
Routes.delete('/deleteComentarios',deleteComentarios)
Routes.delete("/deleteUser",deleteUser)
Routes.put('/updateUser',UpdateUser)
Routes.put('/updateImagePerfil',UpdateImagePerfil)
Routes.delete('/deletePost',deletePost)
Routes.put('/updatePost',UpdateUser)
Routes.post('/getPostById',getPostById)
Routes.get('/getSeguidore',getSeguidores)
Routes.post('/seguir',Seguir)
module.exports = Routes