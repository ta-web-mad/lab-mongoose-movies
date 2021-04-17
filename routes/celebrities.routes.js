const express = require('express')
const { db } = require('./../models/celebrity')
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


 router.get('/celebrities/:id', (req, res, next) => {

    const { id } = req.params

    Celebrity
        .findById(id)
        .then(theCelebrity => {
            res.render('pages/celebrities/show', theCelebrity)
            //console.log('ESTAMOS PASANDO:', theCelebrity)
        })
        .catch(err => {
            next();
            console.log('Error!', err)
        })
    })

router.get('/celebrities/new', (req, res) => res.render('pages/celebrities/new'))


router.post('/celebrities/new', (req, res) => {

    const { name, occupation, catchPhrase} = req.body;
    //console.log('EL REEEQQQ:', req.body);
    //No soy capaz de sacarlo con metodo save
    Celebrity
        .create({name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            res.redirect('/celebrities/new?msg=Error-Try Again')
            console.log('Error!', err)
        })
})

router.post('/celebrities/:id/delete', (req, res, next) => {

    const { id } = req.params

    Celebrity
        .findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})



module.exports = router