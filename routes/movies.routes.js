const express = require('express')
const Movie = require('../models/Movie.model')
const router = express.Router()

// Endpoints
router.get('/movies', (req, res) => {
    //console.log('Go to /movies/index.')
    Movie
        .find()
        .then( movies => {
            //console.log('Movies:', movies )
            res.render('pages/movies/index', { movies })
        })
    .catch(err => console.log('MONGODB READ ERROR:', err))
})

router.get('/movies/new', (req, res) => {
    //console.log('Go to /movies/new.')
    res.render('pages/movies/new')
})

router.post('/movies', (req, res) => {
    const { title, plot, genre } = req.body
    // console.log(`Movie ${title} will be submitted.`)
    Movie
        .create({ title, plot, genre })
        .then(movieCreated => {
            // console.log('Movie info to add:')
            // console.log('Title:', movieCreated.title)
            // console.log('Plot:', movieCreated.plot)
            // console.log('Genre(s):', movieCreated.genre)
            res.redirect('/movies')
        })
        .catch(err => console.log('MONGODB CREATE ERROR:', err))
})

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    //console.log('Movie with ID:', movieId )
    Movie
        .findById(movieId)
        .then(foundMovie => {
            //console.log("Movie found:", foundMovie.title)
            res.render('pages/movies/show', foundMovie)
        })
        .catch(err => console.log('MONGODB READ ERROR: ', err))
})

router.post('/movies/:movieId/delete', (req, res) => {
    const movieId = req.params.movieId
    //console.log('Delete movie with ID:', movieId)
    Movie
        .findByIdAndRemove(movieId)
        .then(removedInfo => {
            //console.log(removedInfo.title, 'has been deleted.')
            res.redirect('/movies')
        })
    .catch(err => console.log('MONGODB DELETE ERROR:', err))
})

router.get('/movies/:movieId/edit', (req, res) => {
    const movieId = req.params.movieId
    //console.log('Edit movie with ID:', movieId)
    Movie
        .findById(movieId)
        .then(foundMovie => {
            //console.log(foundMovie.title, 'will be edited')
            res.render('pages/movies/edit', foundMovie)
        })
        .catch(err => console.log('MONGODB UPDATE ERROR:', err))
})

router.post('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    console.log('Edit movie with ID:', movieId)
    const { title, plot, genre } = req.body
    Movie
        .findByIdAndUpdate(movieId, { title, plot, genre })
        .then(editedMovie => {
            // console.log(`Old>New info:`)
            // console.log('Title:', editedMovie.title, '>', title)
            // console.log('Plot:', editedMovie.plot, '>', plot)
            // console.log('Genre(s):', editedMovie.genre, '>', genre)
            res.redirect('/movies')
        })
        .catch(err => console.log('MONGODB UPDATE ERROR:', err))
})

module.exports = router