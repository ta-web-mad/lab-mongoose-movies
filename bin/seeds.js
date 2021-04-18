require('dotenv').config()


// DB connection
require('./../config/db.config')

const mongoose = require("mongoose")

// const Celebrity = require('./../models/celebrity.model')
// // Seed here!

// const celebrities =[
//     {
//         name: "Gandalf",
//         occupation: ["wizard"],
//         catchPhrase: "You shall not pass!"
//     },
//     {
//         name: "Tony Montana",
//         occupation: ["exsoldier", "drug lord"],
//         catchPhrase: "Say hello to my Little friend"
//     },
//     {
//         name: "Joker",
//         occupation: ["villain", "party clown", "anarchist"],
//         catchPhrase: "Why so serious?"
//     },
// ]

// Celebrity
//     .create(celebrities)
//     .then(response => {
//         console.log('The new celebrities are', response)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Error!', err))

const Movie = require('./../models/movie.model')

const movies =[
    {
        title: "Minions",
        genre: ["family movie", "comedie", "children movie"],
        plot: "The banana-yellow, linguistically garbled henchmen of Despicable Me star in this prequel, recounting the story of their villain-worshipping history."
    },
    {
        title: "Fast & Furious 8",
        genre: ["action", "adventure", "crime"],
        plot: "A ruthless cyberterrorist forces Dom to turn against Letty and the crew, endangering everything they've built. But they won't let him go so easily."
    },
    {
        title: "Jurasic World",
        genre: ["action", "adventure", "sci-Fi"],
        plot: "The owners of a dinosaur theme park try to attract tourists with a thrilling new exhibit, but a deadly giant breaks loose and terrorizes the island."
    },
]

Movie
    .create(movies)
    .then(response => {
        console.log('The new movies are', response)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error!', err))