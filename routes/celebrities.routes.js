const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/celebrity.model')
//const { route } = require('./base.routes')

//lista
router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(celebrities => {
            console.log(celebrities)
            res.render('celebrities/index', {celebrities})
        })
        .catch(err => console.log(err))
})


//detalles /////Esto me funcionaba hasta que he creado el borrar......ahora no me aparecen ni los detalles....
router.get('/details/:_id', (req, res) => {

    const celebrity_id = req.params.celebrity_id

    Celebrity
        .findById(celebrity_id)
        .then(celebrities => {
            res.render('celebrities/show', celebrities)
        })
        .catch(err => console.log(err))

})


//nuevo/////Teo no entiendo por que pero no funciona, ya he cambiado varias ceces el nombre de la url y de todo y ya no se que mas puede ser
router.get('/new-celebrity', (req, res) => res.render('new-celebrity'))

router.post('/new-celebrity', (req, res) => {
    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .create({name, occupation, catchPhrase})
        .then(() => res.redirect('index'))
        .catch(err => console.log(err))
})

//borrar
router.post('/details/:_id/delete', (req, res) => {
    const celebrities_id = req.params.celebrities_id

    Celebrity
        .findByIdAndRemove(celebrities_id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})









module.exports = router