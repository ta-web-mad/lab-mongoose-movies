const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        require: true,
        enum: ["action", "animation", "comedy", "drama", "fantasy", "historical", "horror", "mystery", "romance", "science fiction", "thriller", "western"]
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