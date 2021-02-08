const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const {findById} = require('../models/celebrity.model')

const Celeb = require('../models/celebrity.model')


// router.get('/celebrities', (req, res, next) => {
//     Celeb
//         .find()
//         .select('name')
//         .then(celebs => {
//             console.log(celebs)
//             const celebsArr = celebs
//             res.render('celebrities/index', {celebsArr})   
//         })
//         .catch(err => {
//             console.log('Este ha sido el error: ', err)
//             next()
//             return 
//         })
// })

router.get('/:id', (req, res, next) => {

    // console.log(req.params.id)
    const celebId = req.params.id

    Celeb
        .findById(celebId)
        .then(celebObj => {
            res.render('celebrities/show', celebObj)
        })
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})

router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {
    const {name, occupation, catchPhrase} = req.body
    
    Celeb
        .create({name, occupation, catchPhrase})
        .then(newCeleb => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            res.render('celebrities/new')            
        })
})

router.post('/:id/delete', (req, res, next) => {

    console.log('Esto es lo que está pillando del id', req.params.id)
    const celebIdDelete = req.params.id

    Celeb
        .findByIdAndRemove(celebIdDelete)
        .then(celebObj => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})

router.get('/:id/edit', (req, res) => {
    const celebId = req.params.id

    Celeb
        .findById(celebId)
        .then(celeb => res.render('celebrities/edit', celeb))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })    
})
router.post('/:id/edit', (req, res) => {    
    console.log('Esto es lo que está pillando', req.body)

    const {name, occupation, catchPhrase} = req.body

    const celebId = req.params.id
    
    Celeb
        .findByIdAndUpdate(celebId, {name, occupation, catchPhrase})
        .then(celeb => res.redirect('/celebrities'))
        .catch(err => {
            console.log('Este ha sido el error: ', err)
            next()
            return err
        })
})



module.exports = router