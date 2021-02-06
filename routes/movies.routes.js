const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Movie = require('../models/movie.model')

// Endpoints


// Movie list
router.get('/all-movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('movies/index', { movies })
        })
        .catch(err => console.log(err))
})


//Movie details
router.get('/all-movies-details/:movies_id', (req, res) => {

    const movies_id = req.params.movies_id

    Movie
        .findById(movies_id)
        .then(moviee => {
            res.render('movies/show', moviee)
        })
        .catch(err => console.log(err))

})


//New movie
router.get('/movies/new-movie', (req, res) => res.render('movies/new-movie'))

router.post('/nueva-pelicula', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(movie => res.redirect(`/all-movies-details/${movie._id}`))
        .catch(err => console.log(err))
})



// Delete movie form
router.post('/peliculas/:movie_id/borrar', (req, res) => {

    const movie_id = req.params.movie_id

    Movie
        .findByIdAndRemove(movie_id)
        .then(celeb => res.redirect('/all-movies'))
        .catch(err => console.log(err))
})

// BONUS: Edit Movie form
router.get('/movies/:movie_id/edit', (req, res) => {

    const movie_id = req.params.movie_id

    Movie
        .findById(movie_id)
        .then(movies => res.render('movies/edit', movies))
        .catch(err => console.log(err))
})

router.post('/movies/:movie_id/edit', (req, res) => {

    const { title, genre, plot } = req.body
    const movie_id = req.params.movie_id

    Movie
        .findByIdAndUpdate(movie_id, { title, genre, plot })
        .then(movies => res.redirect(`/all-movies-details/${movies._id}`))
        .catch(err => console.log(err))
})


module.exports = router