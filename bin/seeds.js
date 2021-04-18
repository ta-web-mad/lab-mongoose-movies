const Celebrity = require('../models/celebrity.model')

require('dotenv').config()

const mongoose = require('mongoose')

const Celeb = require('./../models/celebrity.model')

// DB connection
require('./../config/db.config')


// Seed here!

const celebrities = [
    {
        name: "Perro Sanchez",
        occupation: "Politician",
        catchPhrase: "Ser malos! Buenas noches colegas"
    },
    {
        name: "Sergio Ramos",
        occupation: "Footballer",
        catchPhrase: "Unos jugaban al baloncesto, otros al basket..."
    },
    {
        name: "Victor del Diario de Patricia",
        occupation: "TV celebrity",
        catchPhrase: "Fumo pa' hacerme el chulo"
    },
]


Celeb
    .create(celebrities)
    .then(res => {
        console.log("Hola, ya hay famosos");
        mongoose.connection.close()
    })
    .catch(err => console.log('se produjo un error...', err))