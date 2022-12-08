const {Comentario} = require('../models')

exports.setComentarios =async (req,res)=>{
    const {id_Postagem,body,id_Usuario} = req.body
    const c = await Comentario.create({
        body,
        id_Postagem,
        id_Usuario
    })
    res.json(c)
}