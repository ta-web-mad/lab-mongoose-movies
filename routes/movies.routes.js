const express = require("express")
const router = express.Router()
const Movie = require("../models/Movie.model")

// Endpoints
// Movies list
router.get("/", (req, res, next) =>
  Movie.find()
    .select("title")
    .then((allMovies) => res.render("movies/movies-list", { allMovies }))
    .catch((err) => next(err))
)

module.exports = router
