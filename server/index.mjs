import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const { PORT } = process.env

app.get('/', (req, res) => {
    res.send('Welcome to larry-pat foods backend')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))