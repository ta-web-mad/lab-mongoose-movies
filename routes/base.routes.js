const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')



// --------- CELEBRITY ROUTES--------------



router.get('/celebrities', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('pages/celebrities-page', { allCelebrities }))
        .catch(err => console.log('Error!', err))
})

router.get('/celebrities/detalle/:id', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(celebrity => res.render('pages/show', celebrity))
        .catch(err => console.log('Error!', err))
})

// form (get)

router.get('/celebrities/crear', (req, res) => res.render('pages/celebrities-new'))

//  form (post)
router.post('/celebrities/crear', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error!', err))
})


// Delete a celebrity from the database

router.post('/celebrities/delete/:id', (req, res) => {

    const celebrity_id  = req.params.id

    Celebrity
        .findByIdAndRemove(celebrity_id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error!', err))
})

// Edit a celebrity GET

router.get('/celebrities/edit', (req, res) => {

    const { celebrity_id } = req.query

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => res.render('pages/edit-celebrity-form', celebrity))
        .catch(err => console.log('Error!', err))
})


// Edit a celebrity POST

router.post('/celebrities/edit', (req, res) => {

    const { celebrity_id } = req.query
    const { name, occupation, catchPhrase } = req.body

    Book
        .findByIdAndUpdate(celebrity_id , { name, occupation, catchPhrase })
        .then(editedCelebrity => res.redirect(`/celebrities/detalle/${editedCelebrity._id}`))
        .catch(err => console.log('Error!', err))
})




// --------- MOVIE ROUTES--------------


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies-page', { allMovies }))
        .catch(err => console.log('Error!', err))
})

router.get('/movies/detalle/:id', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(movie => res.render('pages/movie-show', movie))
        .catch(err => console.log('Error!', err))
})


// form (get)

router.get('/movies/crear', (req, res) => res.render('pages/movies-new'))

//  form (post)
router.post('/movies/crear', (req, res) => {

    const { title, genre, plot } = req.body

    Celebrity
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies-page'))
        .catch(err => console.log('Error!', err))
})


// Delete a movie from the database

router.post('/movies/delete/:id', (req, res) => {

    const movie_id  = req.params.id

    Movie
        .findByIdAndRemove(movie_id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error!', err))
})

// Edit a movie GET

router.get('/movies/edit', (req, res) => {

    const { movie_id } = req.query

    Celebrity
        .findById(movie_id)
        .then(movie => res.render('pages/edit-movie-form', movie))
        .catch(err => console.log('Error!', err))
})


// Edit a movie POST

router.post('/movies/edit', (req, res) => {

    const { movie_id } = req.query
    const { title, genre, plot } = req.body

    Book
        .findByIdAndUpdate(movie_id , { title, genre, plot })
        .then(editedMovie => res.redirect(`/movies/detalle/${editedMovie._id}`))
        .catch(err => console.log('Error!', err))
})



module.exports = router


