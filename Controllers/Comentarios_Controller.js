const {Comentario} = require('../models')

exports.setComentarios =async (req,res)=>{
    const {id_Postagems,body,id_Usuarios} = req.body
    const c = await Comentario.create({
        body,
        id_Postagems,
        id_Usuarios
    })
    res.json(c)
}

exports.getComentarios =async (req,res)=>{
    const {id} = req.body
    const c = await Comentario.findAll({
      where:{
        id
      }
    })
    res.json(c)
}