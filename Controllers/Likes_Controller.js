const {Likes,Postagem,Usuario} = require("../models")

exports.getLikes =async (req,res)=>{
    const l = await Likes.findAll({
        include:Usuario
    })
    res.json(l)
}
exports.setLikes =async (req,res)=>{
    const { id_Usuario, id_Postagem } = req.body
    const l = await Likes.create({
        id_Usuario,
        id_Postagem
    })
    res.json(l)
}