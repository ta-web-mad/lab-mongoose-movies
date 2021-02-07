const mongoose = require('mongoose')
const Celeb = require('../models/celebrity.model')

const dbName = 'moviesLab2'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
    {
        name: "Robert de Niro",
        occupation: "actor",
        catchPhrase: "Are you tacking to me?"
    },
    {
        name: "John Lennon",
        occupation: "musician",
        catchPhrase: "All living in peace"
    },
    {
        name: "Michael Jordan",
        occupation: "basketball player",
        catchPhrase: "Win or win"
    }
]

Celeb
    .create(celebrities)
    .then(celebrities => {
        console.log(`Se han creado ${ celebrities.length } celebridades en la BBDD`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`SE HA PRODUCIDO UN ERROR:`, err))