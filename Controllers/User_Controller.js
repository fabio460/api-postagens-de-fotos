const {Usuario,Postagem,Likes,Comentario,Endereco} = require('../models')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()


exports.getUsers = async(req,res)=>{
    const p = await Usuario.findAll({
        attributes: { exclude: ['senha'] },
        include:[
            {
                model:Likes
            },
            {
                model:Postagem,
                include:[{
                    model:Likes,
                    include:[
                        {
                          model:Usuario,
                          attributes: { exclude: ['senha'] },
                        }
                    ]
                }]
            }
        ]
    })
    res.json(p)
}
exports.getUser = async(req,res)=>{
   const {id} = req.body
   const p = await Usuario.findOne({
    where:{
        id
    },
    attributes: { exclude: ['senha'] },
    include:[
        {
            model:Likes
        },
        {
            model:Comentario
        },
        {
            model:Postagem,
            include:[
                {
                    model:Likes,
                    include:[
                        {
                        model:Usuario,
                        attributes: { exclude: ['senha'] },
                        }
                    ]
                },
                {
                    model:Comentario,
                    include:[
                        {
                            model:Usuario,
                            attributes: { exclude: ['senha'] },
                        }
                    ]
                },
            ]
        },
        
    ]
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

exports.deleteUser = async (req,res)=>{
    const {id} = req.body

    const u = await Usuario.destroy({
        where:{
            id
        }
    })
    res.json(u)
}

exports.login = async(req,res)=>{
    const {email,senha} = req.body
    const user = await Usuario.findOne({
        where:{
            email,
        },
    })
    const senhaHash = user.senha
    if (bcrypt.compareSync(senha,senhaHash)) {
        const JWT = jwt.sign({user},process.env.secretKey,{expiresIn:'1d'})
        res.json({user:user.id,JWT})
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

exports.setEndereco =async (req,res)=>{
    const {id_Usuario,cidade} = req.body
    const e = await Endereco.create({
        id_Usuario,
        cidade
    })
    res.json(e)
}
exports.getEndereco =async (req,res)=>{
    const {id_Usuario,cidade} = req.body
    const e = await Endereco.findAll({
     
    })
    res.json(e)
}