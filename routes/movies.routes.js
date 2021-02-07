const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Movie = require('./../models/movies.model')

router.get("/", (req, res) => {
    Movie
        .find()
        .then((movies) =>
            res.render("movies-list", { movies }))
        .catch((err) => console.log('ERROR'))

})
router.get("/details/:_id", (req, res) =>
    Movie
    .findById(req.params._id)
    .then((movies) =>
        res.render("movies-details", { movies })
    )
    .catch((err) => console.log('ERROR'))
)

router.get('/new-movies', (req, res) => res.render('new-movies-form'))


router.post('/new-movies', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.render('index'))
        .catch(err => console.log(err))
})

router.post('/details/:_id/delete', (req, res) => {
    const movies_id = req.params.movies_id

    Movie
        .findByIdAndRemove(movies_id)
        .then(movie => res.redirect('/'))
        .catch(err => console.log(err))
})


module.exports = router