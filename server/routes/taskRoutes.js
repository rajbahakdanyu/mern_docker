const express = require("express")

const taskController = require("../controllers/taskController")

const router = express.Router()

router.route("/").get(taskController.getTasks).post(taskController.addTask)

router
    .route("/:id")
    .patch(taskController.updateTask)
    .delete(taskController.deleteTask)

module.exports = router
