const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Endpoints
router.get('/', (req, res) => {
    Celebrity
        .find()
        .select('name')
        .then(celebs => res.render('celebrities/index', {celebs}))
        .catch(err => console.log('Error:', err))
    
})

router.get('/:id', (req, res) => {
    const celebID = req.params.id
    Celebrity
        .findById(celebID)
        .then(celeb => res.render('celebrities/celebrityInfo', celeb))
        .catch(err => console.log('Error', err))
})


module.exports = router
