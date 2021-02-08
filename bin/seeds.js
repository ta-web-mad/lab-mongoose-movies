// const mongoose = require('mongoose')
// const Celeb = require('../models/celebrity.model')

// const dbName = 'moviesLab2'
// mongoose.connect(`mongodb://localhost/${dbName}`)


// const celebrities = [
//     {
//         name: "Robert de Niro",
//         occupation: "actor",
//         catchPhrase: "Are you tacking to me?"
//     },
//     {
//         name: "John Lennon",
//         occupation: "musician",
//         catchPhrase: "All living in peace"
//     },
//     {
//         name: "Michael Jordan",
//         occupation: "basketball player",
//         catchPhrase: "Win or win"
//     }
// ]

// Celeb
//     .create(celebrities)
//     .then(celebrities => {
//         console.log(`Se han creado ${ celebrities.length } celebridades en la BBDD`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(`SE HA PRODUCIDO UN ERROR:`, err))




const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'moviesLab2'
mongoose.connect(`mongodb://localhost/${dbName}`)


const movies = [
    {
        title: "Walking around Liverpool",
        genre: "Documentary",
        plot: "Life of John Lennon before becoming famous"
    },
    {
        title: "Earth Ham",
        genre: "Comedy",
        plot: "Baseball game with real players and cartoon characters"
    },
    {
        title: "Trip to Las Vegas",
        genre: "Comedy",
        plot: "Peter goes on a crazy trip to Las Vegas"
    },
]

Movie
    .create(movies)
    .then(movies => {
        console.log(`Se han creado ${ movies.length } películas en la BBDD`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`SE HA PRODUCIDO UN ERROR:`, err))