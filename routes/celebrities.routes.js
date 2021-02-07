const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Celebrity = require('../model/celebrity.model')

//List
router.get('/', (req, res) => {
    Celebrity
        .find()
        .select("name")
        .then(celebrities => res.render('celebrities/index', {celebrities, error: req.query.error}))
        .catch(err => console.log('ERROR:', err))
})

//Details
router.get('/details/:_id', (req, res) => {
    const celebrity_id = req.params._id

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => res.render('celebrities/details', celebrity))
        .catch(err => console.log('ERROR:', err))

})

//Add
router.get('/new', (req, res) => res.render('celebrities/new-form'))

router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(response => res.redirect(`/celebrities`))
        .catch(err => console.log('ERROR:', err))

    if (!name.length || !occupation.length || !catchPhrase.length) {
        res.render('celebrities/new-form', {errorMsg: "Fill in all the fields."})
    }
})

//Delete
router.post('/:_id/delete', (req, res) => {
    const celebrity_id = req.params._id

    Celebrity
    .findByIdAndRemove(celebrity_id)
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => console.log('ERROR:', err))
})

//Editing
router.get('/edit/:_id', (req, res) => {
    const celebrity_id = req.params._id

    Celebrity
    .findById(celebrity_id)
    .then(celebrity => res.render('celebrities/edit-form', celebrity))
    .catch(err => console.log('ERROR:', err))
})

router.post('/edit/:_id', (req, res) => {
    const {name, occupation, catchPhrase} = req.body
    const celebrity_id = req.params._id

    if (!name.length || !occupation.length || !catchPhrase.length) {
        res.redirect('/celebrities')
    } else {
    Celebrity
    .findByIdAndUpdate(celebrity_id, {name, occupation, catchPhrase})
    .then(celebrity => res.redirect(`/celebrities/details/${celebrity._id}`))
    .catch(err => console.log('ERROR:', err))
    }
})


module.exports = router
