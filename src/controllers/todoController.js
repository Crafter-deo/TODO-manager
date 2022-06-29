const task = require('../models/task')

exports.getAllTasks = (req, res) => {
    res.send('get all tasks')
}

exports.getTask = (req, res) => {
    res.send('get task')
}

exports.addTask = (req, res) => {
    res.send('post task')
}

exports.updateTask = (req, res) => {
    res.send('update task')
}

exports.deleteTask = (req, res) => {
    res.send('delete task')
}