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

exports.listPost = async (req,res)=>{
    const p = await Postagem.findAll({
        include:[
            Likes,
            Usuario
        ]
    })
    res.json(p)
}