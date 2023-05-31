const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

const port = process.env.PORT || 3001

//listen
app.listen(port, function(){
    console.log(`Express app running on port ${port}`)
})