const express = require('express')
const router = express.Router()
//const Celebrity = require('./../models/celebrity')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))




module.exports = router
