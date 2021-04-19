const { response } = require('express')
const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/celebrities', (req, res) =>{
    Celebrity
        .find()
        .then(response =>{
            // console.log('estas son las celebrities enrutadas', response)
            // res.send('vamooooooos')
            res.render('pages/celebrities/index', { response })
        })
        .catch(err => console.log('errorrr!', err ))
})

router.get('/celebrities/:_id', (req, res) => {
    const { _id } = req.params
    console.log('este es el id',_id)

    Celebrity
        .findById(_id)
        .then(response => {
            console.log(response);
            res.render('pages/celebrities/show', response)
        })
        .catch(err => console.log('errorrr!', err))
})

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))


router.post('/celebrities/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => res.render('pages/celebrities/new'))
})

router.post('/celebrities/:id/delete', (req, res) =>{
    const { id } = req.body

    console.log('este es el id que se va a eliminar', id)

    Celebrity
        .findByIdAndRemove(id)
        .then(response => res.redirect('/celebrities', response))
        .catch(err => console.log('errorrr!', err))


})




/*-------MOVIES-------*/


router.get('/movies', (req, res) => {
    //console.log('Go to /movies/index.')
    Movie
        .find()
        .then(movies => {
            //console.log('Movies:', movies )
            res.render('pages/movies/index', { movies })
        })
        .catch(err => console.log('erroorrr!:', err))
})

router.get('/movies/:_id', (req, res) => {
    const { _id } = req.params
    console.log('este es el id', _id)

    Movie
        .findById(_id)
        .then(response => {
            console.log(response);
            res.render('pages/movies/show', response)
        })
        .catch(err => console.log('errorrr!', err))
})


router.get('/movies/new', (req, res) => res.render('pages/movies/new'))

router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => res.render('pages/movies/new'))
})
router.post('/movies/:id/delete', (req, res) => {
    const { id } = req.params

    console.log('este es el id que se va a eliminar', id)

    Movie
        .findByIdAndRemove(id)
        .then(response => res.redirect('/movies', response))
        .catch(err => console.log('errorrr!', err))


})

module.exports = router
