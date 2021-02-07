const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        require: true,
        enum: ["Action", "Animation", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Science fiction", "Thriller", "Western"]
    },
    plot: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie