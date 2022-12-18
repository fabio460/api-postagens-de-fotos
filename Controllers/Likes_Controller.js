const {Likes,Postagem,Usuario} = require("../models")

exports.getLikes =async (req,res)=>{
    const l = await Likes.findAll({
        include:Usuario
    })
    res.json(l)
}
exports.setLikes =async (req,res)=>{
    const { id_Usuarios, id_Postagems } = req.body

    const likeDado = await Likes.findAll({
        where:{
            id_Postagems,
            id_Usuarios
        }
    })

    if (likeDado.length > 0) {
        const l = await Likes.destroy({
            where:{
                id_Postagems,
                id_Usuarios
            }
        })
        res.json(l)
    } else {
        const l = await Likes.create({
            id_Usuarios,
            id_Postagems
        })    
        res.json(l)    
    }
}