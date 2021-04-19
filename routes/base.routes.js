const express = require('express')
const Celebrity = require('./../models/celebrity.model')
const router = express.Router()


// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

// All celebrities list

router.get('/celebrities/index', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('pages/celebrities/index', {
            allCelebrities
        }))
        .catch(err => console.log('Error!', err))
})

// celebrity details
router.get('/celebrities/:celebrity_id', (req, res, next) => {

    const { celebrity_id }  = req.params

    Celebrity
        .findById(celebrity_id)
        .then(celebrityDetails => res.render('pages/celebrities/show', celebrityDetails))
        .catch(err => {
            next();
            return err;
        })
})


// add new celebrities

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))

// Add the new celebrity to the database

router.post('/celebrities/new', (req, res) => {

    const {name,occupation,catchPhrase} = req.body

    Celebrity
        .create({ name,occupation,catchPhrase})
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {res.render("pages/celebrities/new")})
})

// delete celebrity


router.post('/celebrities/:celebrity_id/delete', (req, res, next) => {

    const {celebrity_id } = req.params

    Celebrity
        .findByIdAndRemove(celebrity_id)
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            next();
            return err;
        })
})

// edit celebrity

router.get('/celebrities/:celebrity_id/edit', (req, res, next) => {

    const {celebrity_id} = req.params

    Celebrity
        .findById(celebrity_id)
        .then(celebrity => res.render('pages/celebrities/edit', celebrity))
        .catch(err => {
            next();
            return err;
        })
})

router.post('/celebrities/:celebrity_id', (req, res, next) => {

    const { celebrity_id } = req.params
    const { name,occupation,catchPhrase} = req.body

    Celebrity
        .findByIdAndUpdate(celebrity_id, { name,occupation,catchPhrase})
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            next();
            return err;
        })
})


module.exports = router