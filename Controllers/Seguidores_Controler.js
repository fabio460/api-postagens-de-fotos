const {seguidores} = require('../models')


exports.getSeguidores = async(req,res)=>{
    const {id_Usuarios,id_Seguidor} = req.body
    const s =await seguidores.findOne({
        where:{
            id_Usuarios,
            id_Seguidor
        }
    })
    res.json(s)
}

exports.Seguir = async(req,res)=>{
    try {
        const {id_Usuarios,id_Seguidor} = req.body
        const s =await seguidores.findOne({
            where:{
                id_Usuarios,
                id_Seguidor
            }
        })
        if (id_Seguidor === id_Usuarios) {
            res.json('Não pode seguir a si mesmo')
        }
        if (s) {
            const c =await seguidores.destroy({
                where:{
                    id_Usuarios,
                    id_Seguidor
                }
            })
            res.json(c)
        } else {
            const c =await seguidores.create({
                id_Usuarios,
                id_Seguidor
            })
            res.json(c)        
        }
    } catch (error) {
       res.json(error)        
    }
 }
