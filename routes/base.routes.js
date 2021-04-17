const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')


// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

/***************************************************************/
/***********************   CELEBRITIES   ***********************/
/***************************************************************/

// Show all the celebrities
router.get('/celebrities/index', (req, res, next) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('pages/celebrities/index', { allCelebrities }))
        .catch(err => {
            next();
            return err;
        })
})

// Show the details of one celebrity
router.get('/celebrities/:celebrity_id', (req, res, next) => {

    const { celebrity_id } = req.params

    Celebrity
        .findById(celebrity_id)
        .then(theCelebrity => res.render('pages/celebrities/show', theCelebrity))
        .catch(err => {
            next();
            return err;
        })
})

// Create a new celebrity
router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))

// Add the new celebrity to the database
router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            res.render("pages/celebrities/new")
        })
})

// Delete a celebrity from the database
router.post('/celebrities/:celebrity_id/delete', (req, res, next) => {

    const { celebrity_id } = req.params

    Celebrity
        .findByIdAndRemove(celebrity_id)
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            next();
            return err;
        })
})

// Find the celebrity for edition
router.get('/celebrities/:celebrity_id/edit', (req, res, next) => {

    const { celebrity_id } = req.params

    Celebrity
        .findById(celebrity_id)
        .then(theCelebrity => res.render('pages/celebrities/edit', theCelebrity))
        .catch(err => {
            next();
            return err;
        })
})

// Edit a celebrity
router.post('/celebrities/:celebrity_id', (req, res, next) => {

    const { celebrity_id } = req.params
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            next();
            return err;
        })
})

/***************************************************************/
/***********************    MOVIES   ***************************/
/***************************************************************/

// Show all the movies
router.get('/movies/index', (req, res, next) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies/index', { allMovies }))
        .catch(err => {
            next();
            return err;
        })
})

// Show the details of one movie
router.get('/movies/:movie_id', (req, res, next) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(theMovie => res.render('pages/movies/show', theMovie))
        .catch(err => {
            next();
            return err;
        })
})

// Create a new movie
router.get('/movies/new', (req, res) => res.render('pages/movies/new'))

// Add the new movie
router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies/index'))
        .catch(err => {
            res.render("pages/movies/new")
        })
})

// Delete a movie from the database
router.post('/movies/:movie_id/delete', (req, res, next) => {

    const { movie_id } = req.params

    Movie
        .findByIdAndRemove(movie_id)
        .then(() => res.redirect('/movies/index'))
        .catch(err => {
            next();
            return err;
        })
})

// Find the movies for edition
router.get('/movies/:movie_id/edit', (req, res, next) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(theMovie => res.render('pages/movies/edit', theMovie))
        .catch(err => {
            next();
            return err;
        })
})

// Edit a movie
router.post('/movies/:movie_id', (req, res, next) => {

    const { movie_id } = req.params
    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(movie_id, { title, genre, plot })
        .then(() => res.redirect('/movies/index'))
        .catch(err => {
            next();
            return err;
        })
})

module.exports = router