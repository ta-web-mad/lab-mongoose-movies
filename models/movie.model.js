const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movie = new Schema({
    title: String,
    genre: String,
    plot: String
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movie)

module.exports = Movie