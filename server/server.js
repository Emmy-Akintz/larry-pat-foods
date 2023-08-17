require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser')
const larrypatUsers = require('./routes/users')

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())

app.use((res, req, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/larrypat/users', larrypatUsers)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen
        app.listen(process.env.PORT, () => {
            console.log('connected to db and running on port', process.env.PORT,'!!!');
        })
    })
    .catch((error) => {
        console.log(error);
    })