const express = require('express')
const Celebrity = require('../models/Celebrity.model')
const router = express.Router()

// Endpoints
router.get('/celebrities', (req, res) => {
    //console.log('Go to /celebrities/index.')
    Celebrity
        .find()
        .then( celebrities => {
            //console.log('Celebrities:', celebrities )
            res.render('pages/celebrities/index', { celebrities })
        })
    .catch(err => console.log('MONGODB READ ERROR:', err))
})

router.get('/celebrities/new', (req, res) => {
    //console.log('Go to /celebrities/new.')
    res.render('pages/celebrities/new')
})

router.post('/celebrities', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    //console.log(`Celebrity ${name} will be submitted.`)
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(celebrityCreated => {
            //console.log('Celebrity info to add:')
            // console.log('Name:', celebrityCreated.name)
            // console.log('Occupation:', celebrityCreated.occupation)
            // console.log('Catch Phrase:', celebrityCreated.catchPhrase)
            res.redirect('/celebrities')
        })
        .catch(err => console.log('MONGODB CREATE ERROR:', err))
})

router.get('/celebrities/:celebrityId', (req, res) => {
    const celebrityId = req.params.celebrityId
    // console.log('Celebrity with ID:', celebrityId )
    Celebrity
        .findById(celebrityId)
        .then(foundCelebrity => {
            //console.log("Celebrity found:", foundCelebrity.name)
            res.render('pages/celebrities/show', foundCelebrity)
        })
        .catch(err => console.log('MONGODB READ ERROR: ', err))
})

router.post('/celebrities/:celebrityId/delete', (req, res) => {
    const celebrityId = req.params.celebrityId
    //console.log('Delete celebrity with ID:', celebrityId)
    Celebrity
        .findByIdAndRemove(celebrityId)
        .then(removedInfo => {
            //console.log(removedInfo.name, 'has been deleted')
            res.redirect('/celebrities')
        })
    .catch(err => console.log('MONGODB DELETE ERROR:', err))
})

router.get('/celebrities/:celebrityId/edit', (req, res) => {
    const celebrityId = req.params.celebrityId
    //console.log('Edit celebrity with ID:', celebrityId)
    Celebrity
        .findById(celebrityId)
        .then(foundCelebrity => {
            //console.log(foundCelebrity.name, 'will be edited')
            res.render('pages/celebrities/edit', foundCelebrity)
        })
        .catch(err => console.log('MONGODB UPDATE ERROR:', err))
})

router.post('/celebrities/:celebrityId', (req, res) => {
    const celebrityId = req.params.celebrityId
    //console.log('Edit celebrity with ID:', celebrityId)
    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase },)
        .then(editedCelebrity => {
            // console.log(`Old>New info:`)
            // console.log('Name:', editedCelebrity.name, '>', name)
            // console.log('Occupation:', editedCelebrity.occupation, '>', occupation)
            // console.log('Catch Phrase:', editedCelebrity.catchPhrase, '>', catchPhrase)
            res.redirect('/celebrities')
        })
        .catch(err => console.log('MONGODB UPDATE ERROR:', err))
})

module.exports = router