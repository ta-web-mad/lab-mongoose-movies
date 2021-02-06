const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Celebrity = require('../model/celebrity.model')

//This is the endpoint

router.get('/', (req, res) => {
    Celebrity
    .find()
    .then(celebrities => res.render('celebrities/index', {celebrities, error: req.query.error}))
    .catch(err => console.log('ERROR:', err))
})


module.exports = router
