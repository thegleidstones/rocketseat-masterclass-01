const express = require('express')
const routes = require('./routes')
const connection = require('../database/index')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, async () => {
    console.log("servidor rodando na porta: 3333")

    try {
        await connection.authenticate();
        console.log('Postgres Database Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})