const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    // timestamp: {
    //     type: Date,
    //     default: Date.now
    // }
}, { timestamps: true });

const taskModel = model('Tasks', taskSchema);

module.exports = taskModel;