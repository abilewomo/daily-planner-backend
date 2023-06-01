const express = require('express')
const router = express.Router()
const Tasks = require('../models/tasks')


// Index : Show all the things! - GET /tasks
router.get('/',(req, res)=>{
    
    Tasks.find({},(error, foundTasks)=>{
        if(!error){
            res.json(foundTasks)
        }else{
            res.send({msg: error.message})
        }
    })
})
// New : An empty form for a new thing - GET /tasks/new

// Delete : Get rid of this particular thing! - DELETE /tasks/:id
// Update : Update this specific thing with this updated form - PUT /tasks/:id
// Create : Make a new thing with this filled out form - POST /tasks
router.post('/',(req, res)=>{
    Tasks.create(req.body,(error, createTasks)=>{
        if(!error){
            res.json(createTasks)
        }else{
            res.send({msg: error.message})
        }
    })
})
// Edit : A prefilled form to update a specific thing - GET /tasks/:id/edit
// Show : Show me this one thing! - GET /tasks/:id (edited) 
router.get('/:date',(req, res)=>{
    
    Tasks.find({taskDate: req.params.date},(error, foundTasks)=>{
        if(!error){
            res.json(foundTasks)
        }else{
            res.send({msg: error.message})
        }
    })
})
module.exports = router