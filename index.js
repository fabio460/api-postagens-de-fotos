const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const Routes = require('./Routes')
app.use(Routes)

app.listen(4000,()=>console.log('servidor rodando ...'))