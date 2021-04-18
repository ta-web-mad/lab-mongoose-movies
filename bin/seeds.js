require('dotenv').config()


// DB connection
require('./../config/db.config')

const mongoose = require('mongoose')


const Celeb = require('./../models/celeb.model')
const Movies = require('./../models/movie.model')


// 3 .- Data to seed
const celeb = [
    {
        name: "Carmen de Mairena",
        occupation: "Tv Star",
        catchPhrase: "Todo lo que tengo de morro lo tengo de potorro",
    },
    {
        name: "Lola Flores",
        occupation: "Singer",
        catchPhrase: "Si me queréis, irse",
    },
    {
        name: "Juan Carlos de Borbón",
        occupation: "Who knows",
        catchPhrase: "¿Por qué no te callas?",
    }
]
const movies = [
    {
        title: "Titanic",
        genre: "Dramón",
        plot: "Dos jóvenes se enamoran en un barco transatlántico que choca con un iceberg y alguno que otro muere.",
    },
    {
        title: "Condemor",
        genre: "Unknown",
        plot: "Las aventuras de Chiquito de la Calzada.",
    },
    {
        title: "Star Wars",
        genre: "Fantasia",
        plot: "Guerra entre planetas muy dificil de resumir,  mejor ver.",
    }
]

// 4.- Seeding time yay!
Celeb
    .create(celeb)
    .then(response => {
        console.log('Estos son los famosos!', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))

Movies
    .create(movies)
    .then(response => {
        console.log('Estos son las pelis!', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))
