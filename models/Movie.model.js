const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: [String],
      enum: [
        "Action",
        "Adult",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Film Noir",
        "Game Show",
        "History",
        "Horror",
        "Musical",
        "Music",
        "Mystery",
        "News",
        "Reality-TV",
        "Romance",
        "Sci-Fi",
        "Short",
        "Sports",
        "Talk-Show",
        "Thriller",
        "War",
        "Western",
      ],
      required: true,
    },
    plot: {
      type: String,
      required: true,
      trim: true,
    },
    plotKeywords: [String],
  },
  { timestamp: true }
)

const Movie = mongoose.model("movie", movieSchema)
module.exports = Movie
