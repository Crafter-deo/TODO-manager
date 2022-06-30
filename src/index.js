const express = require('express')
const { config } = require('dotenv')
const connect = require('./config/database').connect

const routes = require('./routes/todoRoutes')
config()
connect()
const PORT = parseInt(process.env.PORT) 


const app = express() 

app.use(express.json())

app.use("/", routes) 


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
}) 