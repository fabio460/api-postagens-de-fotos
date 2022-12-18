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

exports.updateComentarios =async (req,res)=>{
  const {id,id_Postagems,body,id_Usuarios} = req.body
  const c = await Comentario.update({
      body
  },
  {
    where:{
      id,
      id_Postagems,
      id_Usuarios
    }
  }
  )
  res.json(c)
}

exports.deleteComentarios =async (req,res)=>{
  const {id_Postagems,id_Usuarios,id} = req.body
  try {
    const c = await Comentario.destroy({
      where:{
        id,
        id_Postagems,
        id_Usuarios
      }
    }
  )
  res.json(c)
  } catch (error) {
    res.json('falha ao deletar mensagem')
  }
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