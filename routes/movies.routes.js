const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')

// All movies page
router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies/index', { allMovies }))
        .catch(err => console.log('There was an error:', err))
})

// Single movie page
router.get('/movies/:id', (req, res) => {

    if(req.params.id == 'new') {
        res.render('pages/movies/new')
    }

    Movie
        .findById(req.params.id)
        .then(movie => res.render('pages/movies/show', {movie}))
        .catch(err => console.log('There was an error:', err))
})

// Create movie (POST)
router.post('/movies', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('There was an error:', err))
})

// Delete movie (POST)
router.post('/movies/:id/delete', (req, res) => {
    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('There was an error:', err))
})

// Edit movie (GET)
router.get('/movies/:id/edit', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(movie => res.render('pages/movies/edit', movie))
        .catch(err => console.log('There was an error:', err))
})

// Edit movie (POST)
router.post('/movies/:id', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(req.params.id, { title, genre, plot })
        .then(() => res.redirect(`/movies/`))
        .catch(err => console.log('Error!', err))
})

module.exports = router
