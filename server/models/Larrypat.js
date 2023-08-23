const mongoose = require('mongoose')

const LarrypatSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const LarrypatModel = mongoose.model("larrypatUsers". LarrypatSchema)
module.exports = LarrypatModel