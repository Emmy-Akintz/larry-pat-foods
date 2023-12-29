require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')

const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res, next) => {
    res.json({ message: 'Welcome to larry-pat foods!' })
    next()
})
app.use('/api/larrypat', userRoutes)
app.use('/api/larrypat', productRoutes)
app.use('/api/larrypat', orderRoutes)

// connect to db
mongoose.connect(mongo_uri)
    .then(() => {
        // listen
        app.listen(port, () => {
            console.log('connected to db and listening on port ' + port + '!!!');
        })
    })
    .catch((error) => {
        console.log(error);
    })
