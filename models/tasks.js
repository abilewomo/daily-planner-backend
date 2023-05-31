const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: String,
    taskDate: Date
})

const Tasks = mongoose.module('Tasks', taskSchema)
modules.exports = Tasks