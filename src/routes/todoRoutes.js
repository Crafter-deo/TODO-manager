const router = require('express').Router()
const todoController = require('../controllers/todoController')

router
    .get("/tasks", todoController.getAllTasks)
    .get("/tasks/:id", todoController.getTask)
    .post("/tasks", todoController.addTask)
    .put("/tasks/:id", todoController.updateTask)
    .delete("/tasks/:id", todoController.deleteTask)

module.exports = router