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



module.exports = router
