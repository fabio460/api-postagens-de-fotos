const {Usuario,Postagem} = require('../models')

exports.getUser = async(req,res)=>{
    const p = await Usuario.findAll({
        include:Postagem
    })
    res.json(p)
}

exports.createUser = async (req,res)=>{
    const {nome,email,senha,} = req.body
    const u = await Usuario.create({
      nome,
      email,
      senha
    })
    res.json(u)
}
