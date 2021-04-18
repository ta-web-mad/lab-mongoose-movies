const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

module.exports = router
