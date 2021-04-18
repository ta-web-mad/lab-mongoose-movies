const express = require('express')
const Celebrity = require('../models/celebrity')
const Movies = require('../models/movies')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/celebrities', (req, res, next) => {

    Celebrity
        .find()
        .then(celebrities => {
            res.render('pages/celebrities/index', { celebrities })
        })
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/celebrities/:celebrities_id', (req, res, next) => {

    const { celebrities_id } = req.params

    Celebrity
        .findById(celebrities_id)
        .then(theCelebrity => res.render('pages/celebrities/show', theCelebrity))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))

router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            res.redirect('/celebrities/new?msg=Error-Try Again')
            console.log('Error!', err)
        })
})

router.post('/celebrities/:celebrities_id/delete', (req, res, next) => {
    const { celebrities_id } = req.params
    Celebrity
        .findByIdAndRemove(celebrities_id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})


router.get('/movies', (req, res, next) => {

    Movies
        .find()
        .then(movies => {
            res.render('pages/movies/index', { movies })
        })
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/movies/:movies_id', (req, res, next) => {

    const { movies_id } = req.params

    Movies
        .findById(movies_id)
        .then(theMovie => res.render('pages/movies/show', theMovie))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/movies/new', (req, res) => res.render('pages/movies/new'))

router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movies
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            res.redirect('/movies/new?msg=Error-Try Again')
            console.log('Error!', err)
        })
})

router.post('/movies/:movies_id/delete', (req, res, next) => {
    const { movies_id } = req.params
    Movies
        .findByIdAndRemove(movies_id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})


module.exports = router
