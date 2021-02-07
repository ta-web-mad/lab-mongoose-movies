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




module.exports = router
