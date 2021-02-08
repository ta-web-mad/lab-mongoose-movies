const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Movie = require('../models/movie.model')



router.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(movieObject => res.render('movies/show' , movieObject))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})

router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {
    // console.log(req.body)
    const {title, genre, plot} = req.body
    Movie
        .create({title, genre, plot})
        .then(newMovie => res.redirect('/movies'))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            res.render('celebrities/new') 
        })
})

router.post('/:id/delete', (req, res, next) => {

    console.log('Esto es lo que está cogiendo del form', req.params.id)
    const movieIdDelete = req.params.id

    Movie
        .findByIdAndRemove(movieIdDelete)
        .then(deletedMovie => res.redirect('/movies'))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})


module.exports = router
