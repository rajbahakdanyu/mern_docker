const Task = require("../models/taskModel")

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find()

        res.status(200).json({
            status: "success",
            results: tasks.length,
            data: {
                tasks,
            },
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: "error",
        })
    }
}

exports.addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body)

        res.status(200).json({
            status: "success",
            data: {
                task,
            },
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: "error",
        })
    }
}
