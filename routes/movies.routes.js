const express = require("express")
const router = express.Router()
const formatName = require("../helpers")

const Movie = require("../models/Movie.model")

// Endpoints
// Movies list
router.get("/", (req, res, next) =>
  Movie.find()
    .select("title")
    .then((allMovies) => res.render("movies/movies-list", { allMovies }))
    .catch((err) => next(err))
)

// Create movie
router.get("/new-movie", (req, res) => res.render("movies/new-movie"))

router.post("/new-movie", (req, res) => {
  let { title, genre, plot, plotKeywords } = req.body

  // Format name
  title = formatName(title)

  // Format plotKeys
  const arrayKeys = plotKeywords.split(",").map((keyWord) => keyWord.trim())

  Movie.create({ title, genre, plot, plotKeywords: arrayKeys })
    .then(() =>
      Movie.find()
        .select("title")
        .then((allMovies) => res.render("movies/movies-list", { allMovies }))
    )
    .catch((err) => res.render("movies/new-movie"))
})

// Movie detail
router.get("/:id", (req, res, next) =>
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie)
      res.render("movies/movie-detail", { movie })
    })
    .catch((err) => next(err))
)

// Delete movie
router.post("/:id/delete", (req, res, next) =>
  Movie.findByIdAndRemove(req.params.id)
    .then(() =>
      Movie.find()
        .select("title")
        .then((allMovies) => res.render("movies/movies-list", { allMovies }))
    )
    .catch((err) => next(err))
)

// Edit movie
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.render("movies/movie-edit", { movie }))
    .catch((err) => next(err))
})

router.post("/:id/", (req, res, next) => {
  let { title, genre, plot, plotKeywords } = req.body

  // Format name
  title = formatName(title)

  // Format plotKeys
  const arrayKeys = plotKeywords.split(",").map((keyWord) => keyWord.trim())

  Movie.findByIdAndUpdate(req.params.id, {
    title,
    genre,
    plot,
    plotKeywords: arrayKeys,
  })
    .then(() =>
      Movie.find()
        .select("title")
        .then((allMovies) => res.render("movies/movies-list", { allMovies }))
    )
    .catch((err) => next(err))
})

module.exports = router
