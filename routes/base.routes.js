const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/celebrity')
const Movie = require('./../models/movie')


// Endpoints
router.get('/', (req, res) => res.render('pages/index'))
router.get('/celebrities/index', (req, res, next) => {

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

router.get('/movies/index', (req, res, next) => {

    Movie
        .find()
        .then(movies => res.render('pages/movies/index', { movies }))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})

router.get('/movies/:id', (req, res, next) => {

    const { id } = req.params

    Movie
        .findById(id)
        .then(theMovie => res.render('pages/movies/show', theMovie))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})

router.get('/movies/new', (req, res) => res.render('pages/movies/new'))

router.post('/movies/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies/index'))
        .catch(err => {
            res.render("pages/movies/new")
            console.log('Error!', err)
        })
})

router.post('/movies/:id/delete', (req, res, next) => {

    const { id } = req.params

    Movie
        .findByIdAndRemove(id)
        .then(() => res.redirect('/movies/index'))
        .catch(err => {
            next();
            console.log('Error!', err)
        })
})



module.exports = router
