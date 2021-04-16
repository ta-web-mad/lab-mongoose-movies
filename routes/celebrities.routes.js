const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity-model')

// All celebrities page
router.get('/celebrities', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => {
            // console.log(allCelebrities)
            // res.send('This is the celebrities page')
            res.render('pages/celebrities/index', { allCelebrities })
        })
        .catch(err => console.log('There was an error:', err))
})

// Single celebrity page
router.get('/celebrities/:id', (req, res) => {

    if(req.params.id == 'new') {
        res.render('pages/celebrities/new')
    } else {
            Celebrity
        .findById(req.params.id)
        .then(celebrity => {
            // console.log(celebrity)
            // res.send("This is the celebrity detail page")
            res.render('pages/celebrities/show', {celebrity})
        })
        .catch(err => console.log('There was an error:', err))
    }
})

// Create celebrity (POST)
router.post('/celebrities', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('There was an error:', err))
})

// Delete celebrity (POST)
router.post('/celebrities/:id/delete', (req, res) => {
    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('There was an error:', err))
})

// Edit celebrity (GET)
router.get('/celebrities/:id/edit', (req, res) => {
    Celebrity
        .findById(req.params.id)
        .then(celebrity => res.render('pages/celebrities/edit', celebrity))
        .catch(err => console.log('There was an error:', err))
})

// Edit celebrity (POST)
router.post('/celebrities/:id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
        .then(() => res.redirect(`/celebrities/`))
        .catch(err => console.log('Error!', err))
})

module.exports = router
