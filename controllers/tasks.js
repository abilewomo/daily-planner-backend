const express = require('express')
const router = express.Router()
const Tasks = require('../models/tasks')


// Index : Show all the things! - GET /tasks
router.get('/',(req, res)=>{
    
    Tasks.find({},(error, foundTasks)=>{
        if(!error){
            res.json(foundTasks)
        }else{
            console.log('Error fetching task:', error)
        }
    })
})
// New : An empty form for a new thing - GET /tasks/new

// Delete : Get rid of this particular thing! - DELETE /tasks/:id
router.delete('/:id',(req, res)=>{
    Tasks.findByIdAndRemove(req.params.id, (error, deletedTask))
    if(!error){
        res.json(deletedTask)
    }else{
        console.log('Error fetching task:', error)
    }
})
// Update : Update this specific thing with this updated form - PUT /tasks/:id
router.put('/:id',(req, res)=>{
    Tasks.findByIdAndUpdate(req.params.id, req.body, (error, updatedTask)=>{
        res.json(updatedTask)
    })
})
// Create : Make a new thing with this filled out form - POST /tasks
router.post('/',(req, res)=>{
    Tasks.create(req.body,(error, createTasks)=>{
        if(!error){
            res.json(createTasks)
        }else{
            console.log('Error fetching task:', error)
        }
    })
})
// Edit : A prefilled form to update a specific thing - GET /tasks/:id/edit

// Show : Show me this one thing! - GET /tasks/:id (edited) 
router.get('/:month',(req, res)=>{
    
    Tasks.find({taskMonth: req.params.month},(error, foundTasks)=>{
        if(!error){
            res.json(foundTasks)
        }else{
            console.log('Error fetching task:', error)
        }
    })
})
module.exports = router