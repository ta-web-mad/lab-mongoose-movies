const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')
const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


router.get('/celebrities', (req, res) => {
    Celebrity
        .find()
        .then(allCelebrities => {
            res.render('pages/celebrities/index', { allCelebrities })
        })
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))

router.post('/celebrities', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => res.render('pages/celebrities/new'))
})

router.get('/celebrities/:_id', (req, res) => {
    const { _id } = req.params

    Celebrity
        .findById(_id)
        .then(celeb => {
            console.log(celeb);
            res.render('pages/celebrities/show', celeb)
        })
        .catch(err => {
            console.log(err);
            return err
        })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params
    console.log(id);

    Celebrity
        .findByIdAndDelete(id)
        .then(res.redirect('/celebrities'))
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params

    Celebrity
        .findById(id)
        .then(celeb => res.render('pages/celebrities/edit', celeb))
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})

router.post('/celebrities/:id', (req, res, next) => {

    const { id } = req.params
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(id, { name, occupation, catchPhrase })
        .then(res.redirect('/celebrities'))
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})



// Movies routes

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('pages/movies/index', { allMovies })
        })
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})


router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params

    Movie
        .findById(id)
        .then(movie => {
            console.log(movie);
            res.render('pages/movies/show', movie)
        })
        .catch(err => {
            console.log(err);
            next()
            return err
        })
})

router.get('/movies/new', (req, res) => res.render('pages/movies/new'))

router.post('/movies', (req, res, next) => {
    const { title, genre, plot } = req.body
    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log(err);
            next()
            res.render('pages/movies/new')
        })
})

router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params
    Movie
        .findByIdAndDelete(id)
        .then(res.redirect('/movies'))
        .catch(err => {
            next()
            console.log(err);
            return err
        })
})


router.get('/movies/:id/edit', (req, res) => {
    console.log("aqui estamos");
    const { id } = req.params
    console.log(id);
    Movie
        .findById(id)
        .then(movie => res.render('pages/movies/edit', movie))
        .catch(err => console.log(err))
})

router.post('/movies/:id', (req, res) => {
    const { id } = req.params
    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(id, { title, genre, plot })
        .then(res.redirect('/movies'))
        .catch(err => console.log(err))
})


module.exports = router
