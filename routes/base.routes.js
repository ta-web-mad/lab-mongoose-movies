const express = require('express')
const router = express.Router()

const Celeb = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/celebrities', (req, res, next) => {
    Celeb
        .find()
        .select('name')
        .then(celebs => {
            console.log(celebs)
            const celebsArr = celebs
            res.render('celebrities/index', {celebsArr})   
        })
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .select('title')
        .then(moviesList => res.render('movies/index', {moviesList}))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})

module.exports = router
