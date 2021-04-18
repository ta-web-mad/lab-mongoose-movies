const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


//CELEBRITIES LIST
router.get('/celebrities', (req, res, next) => {

    Celebrity
        .find()
        .then(allCelebrities => {
            res.render('pages/celebrities/list', { allCelebrities })
            //console.log(allCelebrities)
        })
        .catch(err => console.log('error', err))
})


//CELEBRITY DETAILS

router.get('/celebrities/:celebrity_id/details', (req,res) => {

    const { celebrity_id } = req.params

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => {
            res.render('pages/celebrities/show', celebrity )
            //console.log(celebrity)
        })
        .catch(err => console.log('error', err))
})

//ADD CELEBRITY(GET)
router.get('/celebrities/new', (req,res) => res.render('pages/celebrities/new'))


//ADD CELEBRITY(POST)
router.post('/celebrities/new', (req,res) => {

    const {name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase } )
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error', err))
})

//DELETE CELEBRITY(POST)
router.post('/celebrities/:celebrity_id/delete', (req,res) => {

    const { celebrity_id } = req.params

    Celebrity
        .findByIdAndRemove(celebrity_id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error', err))
})

//EDITIN(GET)
router.get('/celebrities/edit/:celebrity_id', (req, res) => {

    const {celebrity_id} = req.params

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => {
            res.render('pages/celebrities/edit', celebrity)
            //console.log(celebrity)
        })
        .catch(err => console.log('error', err))
})

//EDITING(POST)
// router.post('/celebrities/:id', (req,res) => {

//     const { celebrity_id } = req.params
//     const { name, occupation, catchPhrase } = req.body

//     Celebrity
//         .findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase })
//         .then(() => res.redirect('/celebrities'))
//         .catch(err => console.log('Error', err))
// })

//MOVIES LIST
router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(allMovies => {
            res.render('pages/movies/list', { allMovies })
            //console.log(allCelebrities)
        })
        .catch(err => console.log('error', err))
})

//MOVIE DETAILS

router.get('/movies/:movie_id/details', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('pages/movies/show', movie)
            console.log(movie)
        })
        .catch(err => console.log('error', err))
})

//ADD MOVIE(GET)
router.get('/movies/new', (req, res) => res.render('pages/movies/new'))


//ADD MOVIE(POST)
router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error', err))
})

//DELETE MOVIE(POST)
router.post('/movies/:movie_id/delete', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findByIdAndRemove(movie_id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error', err))
})

//EDITIN MOVIE(GET)
router.get('/movies/edit/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('pages/movies/edit', movie)
            //console.log(celebrity)
        })
        .catch(err => console.log('error', err))
})

//EDITING MOVIE(POST)
// router.post('/movies/:id', (req,res) => {

//     const { movie_id } = req.params
//     const { title, genre, plot } = req.body

//     Movie
//         .findByIdAndUpdate(movie_id, { title, genre, plot })
//         .then(() => res.redirect('/movies'))
//         .catch(err => console.log('Error', err))
// })




module.exports = router
