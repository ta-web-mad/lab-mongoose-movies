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

//Movie detail
router.get("/:id", (req, res, next) =>
  Movie.findById(req.params.id)
    .then((movie) => res.render("movies/movie-detail", { movie }))
    .catch((err) => next(err))
)
module.exports = router
