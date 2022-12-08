const {Usuario,Postagem} = require('../models')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()
exports.getUser = async(req,res)=>{
    const p = await Usuario.findAll({
        include:Postagem
    })
    res.json(p)
}

exports.createUser = async (req,res)=>{
   try {
    const {nome,email,senha,} = req.body
    const hash = bcrypt.hashSync(senha, 10);
    const u = await Usuario.create({
      nome,
      email,
      senha:hash
    })
    res.json(u)
   } catch (error) {
    res.json(error.errors[0].message === "email must be unique" && "Este email ja existe")
   }
}

exports.login = async(req,res)=>{
    const {email,senha} = req.body
    // const senhaHash = bcrypt.compareSync(myPlaintextPassword, hash);
    const user = await Usuario.findOne({
        where:{
            email,
        }
    })
    const senhaHash = user.senha
    if (bcrypt.compareSync(senha,senhaHash)) {
        const auth = jwt.sign({user},process.env.secretKey,{expiresIn:'1d'})
        res.json({user,auth})
    }else{
        res.json('usuário ou senha invalidos!')
    }
}

exports.jwtVerify = (req,res,next)=>{
    const token = req.headers['x-access-token']
    try {
        if (jwt.verify(token,process.env.secretKey)) {
            next()
        }        
    } catch (error) {
       res.json('usuário não autenticado')
    }
}


