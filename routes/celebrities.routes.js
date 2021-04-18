const express = require('express')
const router = express.Router()
const Celeb = require('./../models/celebrity.model')

// Endpoints
router.get('/', (req, res) => {

    Celeb
        .find()
        .then(allCelebs => res.render('pages/celebrities/index', { data: allCelebs }))
        .catch(err => console.log('Error!', err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Celeb
        .findById(id)
        .populate('Celebrity')
        .then(celebrity => {
            res.render('pages/celebrities/show', celebrity)
        })
        .catch(err => console.log('Error!', err))

})

module.exports = router
