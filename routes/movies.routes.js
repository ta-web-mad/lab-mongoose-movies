const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints
//MOVIES LIST
router.get('/', (req, res) => {
    Movie
        .find()
        .select('title')
        .then(movies => res.render('movies/index', {movies}))
        .catch(err => console.log('Error:', err))
})

//CREATE NEW MOVIE
router.get('/newMovie', (req, res) => res.render('movies/newMovie'))
router.post('/newMovie', (req, res) => {
    const {title, genre, plot} = req.body
    Movie
        .create({title, genre, plot})
        .then(res.redirect('/movies'))
        .catch(err => {
            console.log('Error:', err)
            res.redirect('/movies/newMovie')
        })
})

//MOVIE INFO
router.get('/:id', (req,res) => {
    movieID = req.params.id
    Movie
        .findById(movieID)
        .then(movie => res.render('movies/moviesInfo', movie))
})

//DELETE MOVIE
router.post('/:id/delete', (req, res, next) => {
    const movieID = req.params.id
    Movie
        .findByIdAndRemove(movieID)
        .then(res.redirect('/movies'))
        .catch(err => {
            console.log('Error:', err)
            next()
    })      
})


module.exports = router
