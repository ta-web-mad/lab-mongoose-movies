const mongoose = require('mongoose')

const celebSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: {type: String, required: true}
})

const Celeb = mongoose.model('celeb', celebSchema)

module.exports = Celeb