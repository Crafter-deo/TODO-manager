const mongoose = require('mongoose')

exports.connect = (uri) => {
    try {
        mongoose.connect(uri || 'mongodb://localhost/')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error.message)
        
    }
}