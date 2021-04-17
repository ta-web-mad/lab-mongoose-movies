require('dotenv').config()


// DB connection
require('./../config/db.config')


// Seed here!
// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
const Celebrity = require('./../models/celebrity')
const Movie = require('./../models/movie')

// 3 .- Data to seed
const celebrities = [
    {
        name: "Will Smith",
        occupation: "Actor",
        catchPhrase: "Aw, hell no!"
    },
    {
        name: "Robyn Rihanna",
        occupation: "Singer",
        catchPhrase: "The minute you learn to love yoursel, you won't want to be anyone else"
    },
    {
        name: "Leo Messi",
        occupation: "Football Player",
        catchPhrase: "The best decisions aren’t made with your mind, but with your instinct"
    },
    {
        name: "Elon Musk",
        occupation: "Businessman",
        catchPhrase: "I could either watch it happen or be a part of it"
    }
]

// 4.- TSeeding time!
// Celebrity
//     .create(celebrities)
//     .then(data => {
//         console.log('VIP Here:', data)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('se produjo un error...', err))

const movies = [
    {
        title: "Messi The Goat",
        genre: "Sports, Documentary",
        plot: "This documentary goes deep inside the life of the greatest football player of all times"
    },
    {
        title: "I am Legend",
        genre: "Action, drama, sci-fi",
        plot: "Human being is about to dissapear due to a world pandemic. Coincidence?"
    },
    {
        title: "Jumanji",
        genre: "Comedy, adventure",
        plot: "A game is able to change the reallity. In order to go back to normal, a group of friends need to finish the game"
    }
]

Movie
    .create(movies)
    .then(response => {
        //console.log("Here you have our movies", response)
        mongoose.connection.close();
    })
    .catch(err => console.log("Something was wrong...", err))