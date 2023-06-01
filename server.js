const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')
const cors =require('cors')
const Task = require('./models/tasks')
const tasksController = require('./controllers/tasks')


const port = process.env.PORT || 3001

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public')) 
app.use(cors({ origin: '*' })) 

//Routes
app.use('/', tasksController)

//listen
app.listen(port, function(){
    console.log(`Express app running on port ${port}`)
})