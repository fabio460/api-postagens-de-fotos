const {modelTeste} = require('../models')

exports.getUser = async(req,res)=>{
    const p = await modelTeste.findAll()
    
    res.json(p)
 }