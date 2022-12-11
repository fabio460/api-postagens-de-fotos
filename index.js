const express = require('express')
const cors = require('cors')
const Routes = require('./Routes')
const app = express()
app.use(cors())
app.use(express.json())

app.use(Routes)

app.listen(4000,()=>console.log('servidor rodando ...'))