const express = require('express')
const router = express.Router()

const Celeb = require('./../models/celeb.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/celebrities', (req, res) => {

    Celeb
        .find()
        .then(allCeleb => res.render('pages/celebrities-page', { allCeleb }))
        .catch(err => console.log('Error!', err))
})

router.get('/celebrities/show/:celeb_id', (req, res) => {

    const { celeb_id } = req.params

    Celeb
        .findById(celeb_id)
        .then(theCeleb => res.render('pages/show-page', theCeleb))
        .catch(err => console.log('Error!', err))
})

router.get('/celebrities/new', (req, res) => res.render('pages/new-celeb-form'))

// Celeb form (post)
router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celeb
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities?msg=You just created a new celebritie'))
        .catch(err => console.log('Error!', err))
})


router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params
    Celeb
        .findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})


// Celeb edit (get)
router.get('/celebrities/edit', (req, res) => {

    const { celeb_id } = req.query

    Celeb
        .findById(celeb_id)
        .then(celeb => res.render('pages/edit-celeb-form', celeb))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})


// Celeb edit (post)
router.post('/celebrities/edit', (req, res) => {

    const { celeb_id } = req.query
    const { name, occupation, catchPhrase } = req.body

    Celeb
        .findByIdAndUpdate(celeb_id, { name, occupation, catchPhrase })
        .then(editedCeleb => res.redirect(`/celebrities/show/${editedCeleb._id}`))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

//--------------------------------------------------------------------------------------------------
const Movies = require('./../models/movie.model')
router.get('/movies', (req, res) => {

    Movies
        .find()
        .then(allMovies => res.render('pages/movies-page', { allMovies }))
        .catch(err => console.log('Error!', err))
})

router.get('/movies/show/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movies
        .findById(movies_id)
        .then(theMovie => res.render('pages/movies-show-page', theMovie))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})


router.get('/movies/new', (req, res) => res.render('pages/new-movie-form'))

// Movie form (post)
router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movies
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies?msg=You just created a new movie'))
        .catch(err => console.log('Error!', err))
})

router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params
    Movies
        .findByIdAndRemove(id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})

router.get('/movies/edit', (req, res) => {

    const { movies_id } = req.query

    Movies
        .findById(movies_id)
        .then(celeb => res.render('pages/edit-movie-form', celeb))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})


// Book edit (post)
router.post('/movies/edit', (req, res) => {

    const { movies_id } = req.query
    const { title, genre, plot } = req.body

    Movies
        .findByIdAndUpdate(movies_id, { title, genre, plot })
        .then(editedMovie => res.redirect(`/movies/show/${editedMovie._id}`))
        .catch(err => {
            next()
            console.log('Error!', err)
        })


})

module.exports = router
