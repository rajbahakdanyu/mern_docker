const Task = require('../models/taskModel')

exports.getTasks = async (req,ress,next) => {
    try{
        const tasks = await Task.find()

        res.status(200).json({
            status: "success",
            results: tasks.length,
            data: {
                tasks,
            },
        })
    } catch(e) {
        console.log(e)
        res.status(400).json({
            status: "error",
        })
    }
}