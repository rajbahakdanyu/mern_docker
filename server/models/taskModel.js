const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Task must have a title"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task