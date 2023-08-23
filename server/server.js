const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LarrypatModel = require('./models/Larrypat')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost://127.0.0.1:27017/larrypat");

app.post('/users', (req, res) => {
    LarrypatModel.create(req.body)
    .then(larryPatUsers => res.json(larryPatUsers))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running on port 3001");
})