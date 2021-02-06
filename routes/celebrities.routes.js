const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Endpoints
//CELEBRITIES LIST
router.get('/', (req, res) => {
    Celebrity
        .find()
        .select('name')
        .then(celebs => res.render('celebrities/index', {celebs}))
        .catch(err => console.log('Error:', err))
    
})

//CREATE NEW CELEBRITY
router.get('/newCelebrity', (req, res) => res.render('celebrities/newCelebrity'))
router.post('/newCelebrity', (req, res) => {
    const {name, occupation, catchPhrase} = req.body
    
    Celebrity
        .create({name, occupation, catchPhrase})
        .then(celebrity => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Error:'. err)
            res.redirect('/celebrities/newCelebrity')
        })
})

//EDIT MOVIE
router.get('/:id/edit', (req, res) => {
    const celebID = req.params.id

    Celebrity
        .findById(celebID)
        .then(celeb =>res.render('celebrities/editCelebrity', celeb))
        .catch(err => console.log('Error:', err))
})

router.post('/:id/edit', (req, res) => {
    const celebID = req.params.id
    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .findByIdAndUpdate(celebID, {name, occupation, catchPhrase})
        .then(celeb => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})

//CELEBRITY INFO
router.get('/:id', (req, res) => {
    const celebID = req.params.id
    Celebrity
        .findById(celebID)
        .then(celeb => res.render('celebrities/celebrityInfo', celeb))
        .catch(err => console.log('Error', err))
})

//DELETE CELEBRITY
router.post('/:id/delete', (req, res, next) => {
    const celebID = req.params.id
    Celebrity
        .findByIdAndRemove(celebID)
        .then(res.redirect('/celebrities'))
        .catch(err => {
            console.log('Error:', err)
            next()
        })
})






module.exports = router
