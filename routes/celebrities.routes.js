const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Celebrity = require('./../models/celebrity.model')

// Endpoints
router.get("/", (req, res) => {
    Celebrity.find()
        .then((celebrities) =>
            res.render("celebrities-list", { celebrities })
        )
        .catch((err) => console.log('ERROR'))

})
router.get("/details/:_id", (req, res) =>
    Celebrity
    .findById(req.params._id)
    .then((celebrities) =>
        res.render("celebrities-details", { celebrities })
    )
    .catch((err) => console.log('ERROR'))
)

router.get('/new-celebrities', (req, res) => res.render('new-celebrities-form'))


router.post('/new-celebrities', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.render('index'))
        .catch(err => console.log(err))
})


router.post('/details/:_id/delete', (req, res) => {
    const celebrities_id = req.params.celebrities_id

    Celebrity
        .findByIdAndRemove(celebrities_id)
        .then(celeb => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router