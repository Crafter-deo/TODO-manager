const express = require('express')
const dotenv = require('dotenv').config()
const connect = require('./config/database').connect

const routes = require('./routes/todoRoutes')
connect()

const PORT = parseInt(process.env.PORT) 


const app = express() 

app.use("/", routes) 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
}) 