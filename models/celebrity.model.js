const mongoose = require('mongoose')

const celebSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celeb = mongoose.model('celeb', celebSchema)

module.exports = Celeb