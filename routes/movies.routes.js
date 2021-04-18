const express = require('express')
const router = express.Router()
const Movie = require('./../models/movie.model')


router.get('/', (req, res) => {

    Movie.find()
        .then(allMovies => res.render('pages/movies/index', { data: allMovies, msg: req.query.msg }))
        .catch(err => console.log('Error!', err))
})

router.get('/details/:id', (req, res) => {
    const id = req.params.id

    Movie.findById(id)
        .then(movie => {
            res.render('pages/movies/show', movie)
        })
        .catch(err => console.log('Error!', err))
})


router.get('/new', (req, res) => {
    res.render('pages/movies/new')
})

router.post('/', (req, res) => {
    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies?msg=Pelicula creado'))
        .catch(err => console.log('Error!', err))
})

router.post('/delete/:id', (req, res) => {
    const id = req.params.id

    Movie
        .findByIdAndRemove(id)
        .then(() => res.redirect('/movies?msg=Pelicula eliminada'))
        .catch(err => console.log('Error!', err))
})

module.exports = router