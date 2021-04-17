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


// router.get('/libros/detalles/:Celebrity_id', (req, res) => {

//     const { Celebrity_id } = req.params

//     Celebrity
//         .findById(Celebrity_id)
//         .then(theCelebrity => res.render('pages/Celebrity-detail', theCelebrity))
//         .catch(err => console.log('Error!', err))
// })



module.exports = router