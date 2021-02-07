const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Celeb = require('../models/celebrity.model')


router.get('/celebrities', (req, res, next) => {
    Celeb
        .find()
        .select('name')
        .then(celebs => {
            console.log(celebs)
            const celebsArr = celebs
            res.render('celebrities/index', {celebsArr})   
        })
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return 
        })
})

router.get('/celebrities/:id', (req, res) => {

    // console.log(req.params.id)
    Celeb
        .findById(req.params.id)
        .then(celebObj => {
            const celebDetails = celebObj
            res.render('celebrities/show', celebDetails)
        })
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            // next()
            return 
        })
})
    


module.exports = router