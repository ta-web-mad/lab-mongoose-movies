const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity.model')

// Endpoints


// Celebrity list
router.get('/all-celebrities', (req, res) => {

    Celebrity
        .find()
        .then(celebrities => {
            res.render('celebrities/index', { celebrities })
        })
        .catch(err => console.log(err))
})


//Celebrity details
router.get('/all-celebrities-details/:celebrity_id', (req, res) => {

    const celebrity_id = req.params.celebrity_id

    Celebrity
        .findById(celebrity_id)
        .then(celeb => {
            res.render('celebrities/show', celeb)
        })
        .catch(err => console.log(err))

})


//New celebrity 
router.get('/celebrities/new-celebrity', (req, res) => res.render('celebrities/new-celebrity'))

router.post('/nueva-celebridad', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(celebrity => res.redirect(`all-celebrities-details/${celebrity._id}`))
        .catch(err => console.log(err))
})



// Delete Celebrity form
router.post('/celebridad/:celebrity_id/borrar', (req, res) => {

    const celebrity_id = req.params.celebrity_id

    Celebrity
        .findByIdAndRemove(celebrity_id)
        .then(celeb => res.redirect('/all-celebrities'))
        .catch(err => console.log(err))
})

// BONUS: Edit Movie form
router.get('/celebrities/:celebrity_id/edit', (req, res) => {

    const celebrity_id = req.params.celebrity_id

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => res.render('celebrities/edit', celebrity))
        .catch(err => console.log(err))
})

router.post('/celebrities/:celebrity_id/edit', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    const celebrity_id = req.params.celebrity_id

    Celebrity
        .findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase })
        .then(celebrity => res.redirect(`/all-celebrities-details/${celebrity._id}`))
        .catch(err => console.log(err))
})



module.exports = router