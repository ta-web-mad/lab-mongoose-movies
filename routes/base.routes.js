const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))
const Celeb = require('./../models/celebrity.model')

//Celebs

router.get('/celebrities', (req, res) => {

    Celeb
        .find()
        .then(allCelebs => res.render('pages/celebrities/index', { data: allCelebs }))
        .catch(err => console.log('Error!', err))
})


module.exports = router
