const mongoose = require('mongoose')
const { config } = require('dotenv')

config()

exports.connect = (uri) => {
    try {
        mongoose
            .connect(uri || process.env.MONGO_DB_LOCAL)
            .then(() => console.log('Connected to MongoDB'))

    } catch (error) {
        console.error(error.message)

    }
}