const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')

// //CELEBRITIES LIST
// router.get('/celebrities', (req, res, next) => {

//     Celebrity
//         .find()
//         .then(allCelebrities => {
//             res.render('pages/celebrities/list', { allCelebrities })
//             console.log(allCelebrities)
//         })
//         .catch(err => console.log('error', err))
// })


module.exports = router

// render('pages/celebrities/celebrities-index'), { allCelebrities })