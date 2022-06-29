const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    // _id: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    //     autoIncrement: true
    // },
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const taskModel = model('Tasks', taskSchema);

module.exports = taskModel;