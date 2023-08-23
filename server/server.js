require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// 
// const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// 
const larrypatUsers = require('./routes/users')

// express app
const app = express()

// middleware
app.use(cors())
// app.use(express.urlencoded())
app.use(express.json())
// app.use(bodyParser.json())

app.use((res, req, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/larrypat/users', larrypatUsers)

// user login
// app.use(bodyParser.json())

// app.post('/larrypat/users/login', (req, res) => {
//     const {email, password} = req.body;
//     const user = users.find(user => user.email === email);

//     if(!user || !bcrypt.compareSync(password, user.password)) {
//         return res.status(401).json({message: 'Invalid credentials'});
//     }

//     const token = jwt.sign({userID: user.id}, 'testing123');
//     res.json({token});
// })

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