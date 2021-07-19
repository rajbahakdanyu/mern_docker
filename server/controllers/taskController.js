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

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: "success",
            data: {
                task,
            },
        })
    } catch (e) {
        console.log(e)
        res.send(400).json({
            status: "error",
        })
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "success",
        })
    } catch (e) {
        console.log(e)
        res.send(400).json({
            status: "error",
        })
    }
}
