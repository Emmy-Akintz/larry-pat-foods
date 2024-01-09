require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')
const addressRoutes = require('./routes/address')
const reviewRoutes = require('./routes/review')

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
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/address', addressRoutes)
app.use('/api/review', reviewRoutes)

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
