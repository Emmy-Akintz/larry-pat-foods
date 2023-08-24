require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LarrypatModel = require('./models/Larrypat')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI);

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    LarrypatModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success!")
            } else {
                res.json("The password is incorrect!")
            }
        } else {
            res.json("No result existed!")
        }
    })
})

app.post('/signup', (req, res) => {
    LarrypatModel.create(req.body)
    .then(larryPatUsers => res.json(larryPatUsers))
    .catch(err => res.json(err))
})

app.listen(process.env.PORT, () => {
    console.log("server is running on port " + process.env.PORT);
})