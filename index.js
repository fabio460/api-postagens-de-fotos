const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {modelTeste} = require('./models')

app.get('/',async(req,res)=>{
   const p = await modelTeste.findAll()
   
   res.json(p)
})

app.listen(4000,()=>console.log('servidor rodando ...'))