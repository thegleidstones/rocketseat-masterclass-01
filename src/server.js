const express = require('express')
const routes = require('./routes')
require('./database')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, async () => {
    console.log("servidor rodando na porta: 3333")

})