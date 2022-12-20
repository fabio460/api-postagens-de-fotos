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
   try{
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
   }catch(error){
      res.json(error)
   }
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


exports.updateUser =async (req,res)=>{
    const {id,nome,email,senha,fotoDePerfil,idade,proficao} = req.body
    // const hash = bcrypt.hashSync(senha, 10);
    // const e = await Usuario.update({
    //     nome,
    //     email,
    //     senha:hash,
    //     fotoDePerfil,
    //     idade,
    //     proficao
    // },{
    //     where:{
    //         id
    //     }
    // })
    res.json(nome)
}

exports.UpdateImagePerfil = async (req,res)=>{

    const {id,fotoDePerfil} = req.body
    const i = await Usuario.update({
        fotoDePerfil
    },
    {
        where:{
            id
        }
    }
    )
    return res.json(i)
}

exports.UpdateUser =async (req,res)=>{
   const {id,nome,email,idade,proficao} = req.body
    try {
        //const hash = bcrypt.hashSync(senha, 10);
        const e = await Usuario.update({
            nome,
            email,
            idade,
            proficao
        },{
            where:{
                id
            }
        })
        res.json(e)
    } catch (error) {
        res.json(error)
    }
}


exports.login = async(req,res)=>{
  try {
    const {email,senha} = req.body
    if (email !=='' && senha !== '') {
        const user = await Usuario.findOne({
            where:{
                email,
            },
        })
        
        if (user) {
            const senhaHash = user.senha
            if (bcrypt.compareSync(senha,senhaHash)) {
                const JWT = jwt.sign({user},process.env.secretKey,{expiresIn:'1d'})
                res.json({user:user.id,JWT})
            }else{
                res.json('usuário ou senha invalidos!')
            }  
        } else {
            res.json(null)
        }
      
    }else{
        res.json('Os campos não podem ser nulos')
    }
  } catch (error) {
    res.json(error)
  }
}

exports.jwtVerify = (req,res,next)=>{
    const token = req.headers['x-access-token']
    try {
        if (jwt.verify(token,process.env.secretKey)) {
            next()
        }        
    } catch (error) {
       res.json(null)
    }
}

