const express = require('express')
const Routes = require('./Routes')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(Routes)


app.listen(4000,()=>console.log('servidor rodando ...'))