const express = require('express')
const Celebrity = require('../models/celebrity')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/celebrities', (req, res, next) => {

    Celebrity
        .find()
        .then(celebrities => {
            res.render('pages/celebrities/index', { celebrities })
        })
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/celebrities/:celebrities_id', (req, res, next) => {

    const { celebrities_id } = req.params

    Celebrity
        .findById(celebrities_id)
        .then(theCelebrity => res.render('pages/celebrities/show', theCelebrity))
        .catch(err => {
            next()
            console.log('Error!', err)
        })
})

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))

router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            res.redirect('/celebrities/new?msg=Error-Try Again')
            console.log('Error!', err)
        })
})

router.post('/celebrities/:celebrities_id/delete', (req, res, next) => {
    const { celebrities_id } = req.params
    Celebrity
        .findByIdAndRemove(celebrities_id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})

module.exports = router
