require('dotenv').config()


// DB connection
require('./../config/db.config')


const { Mongoose } = require('mongoose')
// Seed here!

const Celebrity = require('./../models/celebrity')

const celebrities = [
    {
        name: "Victorio",
        occupation: "Actor",
        catchPhrase: "Just do it",
    },
    {
        name: "El aberroncho",
        occupation: "Guardian del bosque",
        catchPhrase: "bijain the musgo",
    },
    {
        name: "Vinicius Jr",
        occupation: "Jogador du futebol",
        catchPhrase: "gustosoooo",
    }
]

Celebrity
    .create(celebrities)
    .then(response => {
        console.log('estas son las celebridades', response)
        mongoose.connection.close()
})
    .catch(err => console.log('se produjo un error!', err))

const Movie = require('./../models/movie')

const movies = [
    {
        title: "Dos rubias de pelo en pecho",
        genre: "comedia",
        plot: "policia secreta vestidos de mujer",
    },
    {
        title: "Sexo en Nueva York 2",
        genre: "Romance",
        plot: "A mi novia le gusta mucho",
    },
    {
        title: "Ali g",
        genre: "comedia",
        plot: "dos palabras Res Pecto",
    }
]

Movie
    .create(movies)
    .then(response => {
        console.log('estas son las celebridades', response)
        mongoose.connection.close()
    })
    .catch(err => console.log('se produjo un error!', err))
