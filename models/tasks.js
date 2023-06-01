const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: String,
    complete: { type: Boolean, default: false },
    taskDate: String,
    taskMonth: Number,
})

const Tasks = mongoose.model('Task', taskSchema)
module.exports = Tasks