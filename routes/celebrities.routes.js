const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')



// Endpoints
router.get('/', (req, res) => res.render('pages/index'))
router.get('/celebrities', (req, res, next) => {

    Celebrity
        .find()
        .then(vip => res.render('pages/celebrities/index', { vip }))
        
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})


 router.get('/celebrities/:id', (req, res) => {

    const { id } = req.params

    Celebrity
        .findById(id)
        .then(theCelebrity => {
            res.render('pages/celebrities/show', theCelebrity)
            console.log('ESTAMOS PASANDO:', theCelebrity)
        })
        .catch(err => {
            next();
            console.log('Error!', err)
        })
    })



module.exports = router