const {Likes,Postagem,Usuario} = require("../models")



exports.createPost = async (req,res)=>{
    const {imagem,titulo,descricao,id_Usuarios} = req.body
    const p =await Postagem.create({
        imagem,
        titulo,
        descricao,
        id_Usuarios
    })
    res.json(p)
}

exports.deletePost = async (req,res)=>{
    const {id} = req.body
    try {
        const p =await Postagem.destroy({
            where:{
                id
            }
        })
        res.json(p)
    } catch (error) {
        res.json(error)
    }
}

exports.updatePost = async (req,res)=>{
    const {imagem,titulo,descricao,id} = req.body
    const p =await Postagem.update({
        imagem,
        titulo,
        descricao,
    },
    {
        where:{
            id
        }
    }
    )
    res.json(p)
}

exports.listPost = async (req,res)=>{
    const p = await Postagem.findAll({
        include:[
            Likes,
            Usuario
        ],
        order:[
            ["id","DESC"]
        ]
    })
    res.json(p)
}