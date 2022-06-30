const Task = require('../models/task')

exports.getAllTasks = async(req, res) => {
    try {
        let tasks = await Task.find()
        res.status(200).json({
            message: 'Tasks retrieved',
            taskCount: tasks.length,
            tasks: tasks,
            
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Internal server error',
            error: error.message
        })
    }
}

exports.getTask = async(req, res) => {
    try {
        let task_id = req.params.id
        let task = await Task.findById(task_id)
        if(!task) {
            res.status(404).json({
                message: 'Task not found'
            })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error)        
    }
}

exports.addTask = async(req, res) => {
    try {
        let task = req.body
        let createdTask = await Task.create(task)
        console.log(task)
        if(!createdTask) {
            return res.status(400).json({
                message: 'Task not created',
                error: error.message
            })
        }
        console.log(createdTask) 
        res.status(200).json({
            message: 'Task created',
            task: createdTask
        })
        
    } catch (error) {
        res.status(500).json(error)        
    }
}

exports.updateTask = async(req, res) => {
    try {
        let task_id = req.params.id
        let updatedTask = await Task.findByIdAndUpdate(task_id, req.body, {new: true})
        if(!updatedTask) {
            return res.status(400).json({
                message: 'Task not updated'
            })
        }
        res.status(200).json({
            message: 'Task updated',
            updatedTask
        })
    } catch (error) {
        res.status(500).json(error)                
    }
}

exports.deleteTask = async(req, res) => {
    try {
        let task_id = req.params.id
        let deletedTask = await Task.findByIdAndDelete(task_id)
        if(!deletedTask) {
            return res.status(400).json({
                message: 'Task not deleted'
            })  
        }
        res.status(200).json({
            message: 'Task deleted',
            deletedTask
        })
    } catch (error) {
        res.status(500).json(error)                
    }
}