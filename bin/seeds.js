require('dotenv').config()


// DB connection
require('./../config/db.config')

// Mongoose requirement
const mongoose = require('mongoose')

// Model requirement
const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')

// Seed here!
const celebrities = [
    {
        name: "Tom Hardy",
        occupation: "Actor",
        catchPhrase: "This, Ariadne, would be a kick..."
    },
    {
        name: "Heath Ledger",
        occupation: "Actor",
        catchPhrase: "Why so serious?"
    },
    {
        name: "Hans Zimmer",
        occupation: "Composer",
        catchPhrase: "If I had not been a musician, I would have been a firefighter!"
    }
]


// Celebrity
//     .create(celebrities)
//     .then(response => {
//         // console.log("Here you have our celebrities", response)
//         mongoose.connection.close();
//     })
// .catch(err => console.log("Something was wrong...", err))

const movies = [
    {
        title: "Inception",
        genre: "Adventure, thriller, action, sci-fi",
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        title: "Interstellar",
        genre: "Adventure, drama, sci-fi",
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        title: "Amélie",
        genre: "Comedy, romance",
        plot: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love."
    }
]

Movie
    .create(movies)
    .then(response => {
        //console.log("Here you have our movies", response)
        mongoose.connection.close();
    })
    .catch(err => console.log("Something was wrong...", err))