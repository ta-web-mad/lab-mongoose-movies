const express = require('express')
const router = express.Router()
const Celeb = require('./../models/celebrity.model')

// Endpoints
router.get('/', (req, res) => {

    Celeb
        .find()
        .then(allCelebs => res.render('pages/celebrities/index', { data: allCelebs, msg: req.query.msg }))
        .catch(err => console.log('Error!', err))
})

router.get('/details/:id', (req, res) => {
    const id = req.params.id

    Celeb
        .findById(id)
        .populate('Celebrity')
        .then(celebrity => {
            res.render('pages/celebrities/show', celebrity)
        })
        .catch(err => console.log('Error!', err))

})

router.get('/new', (req, res) => {
    res.render('pages/celebrities/new')
})

router.post('/', (req, res) => {
    const { name, occupation, phrase } = req.body

    Celeb
        .create({ name, occupation, phrase })
        .then(() => res.redirect('/celebrities?msg=Famoso creado'))
        .catch(err => console.log('Error!', err))
})

router.post('/delete/:id', (req, res) => {
    const id = req.params.id

    Celeb
        .findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities?msg=Famoso eliminado'))
        .catch(err => console.log('Error!', err))
})

module.exports = router
