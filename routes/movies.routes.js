const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Movie = require('../model/movie.model')

//List
router.get('/', (req, res) => {
    Movie
        .find()
        .select("title")
        .then(movies => res.render('movies/index', {movies, error: req.query.error}))
        .catch(err => console.log('ERROR:', err))
})

//Details
router.get('/details/:_id', (req, res) => {
    const movie_id = req.params._id

    Movie
        .findById(movie_id)
        .then(movie => res.render('movies/details', movie))
        .catch(err => console.log('ERROR:', err))

})

//Add
router.get('/new', (req, res) => res.render('movies/new-form'))

router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(response => res.redirect(`/movies`))
        .catch(err => console.log('ERROR:', err))

})







module.exports = router
