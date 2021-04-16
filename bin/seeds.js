require('dotenv').config()


// DB connection
require('./../config/db.config')


const mongoose = require('mongoose')

// const Celebrity = require('../models/celebrity-model')

// const celebrities = [
//     {
//         name: 'Tom Cruise',
//         occupation: 'actor',
//         catchPhrase: 'Someday. That is a dangerous word. It is really just a code for never.'
//     },
//     {
//         name: 'Elton John',
//         occupation: 'singer',
//         catchPhrase: 'Music has healing power. It has the ability to take people out of themselves for a few hours.'
//     },
//     {
//         name: 'Freddie Mercury',
//         occupation: 'singer',
//         catchPhrase: 'I won’t be a rock star. I will be a legend.'
//     },
// ]

// Celebrity
//     .create(celebrities)
//     .then(response => {
//         console.log('Here are the celebrities', response)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('An error happened:', err))

const Movie = require('../models/movie-model')

const movies = [
    {
        title: 'Titanic',
        genre: 'Romance',
        plot: 'Someday. That is a dangerJames Cameron "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.ous word. It is really just a code for never.'
    },
    {
        title: 'Catch Me If You Can',
        genre: 'Comedy',
        plot: 'Music has healing poweFrank Abagnale, Jr. (Leonardo DiCaprio) worked as a doctor, a lawyer, and as a co-pilot for a major airline -- all before his 18th birthday. A master of deception, he was also a brilliant forger, whose skill gave him his first real claim to fame: At the age of 17, Frank Abagnale, Jr. became the most successful bank robber in the history of the U.S. FBI Agent Carl Hanratty (Tom Hanks) makes it his prime mission to capture Frank and bring him to justice, but Frank is always one step ahead of him.'
    },
    {
        title: 'Requiem for a Dream',
        genre: 'Drama',
        plot: 'Imaginatively evoking the inner landscape of human beings longing to connect, to love and feel loved, the film is a parable of happiness gloriously found and tragically lost. "Requiem for a Dream" tells parallel stories that are linked by the relationship between the lonely, widowed Sara Goldfarb and her sweet but aimless son, Harry. The plump Sara, galvanized by the prospect of appearing on a TV game show, has started on a dangerous diet regimen to beautify herself for a national audience.'
    },
]

Movie
    .create(movies)
    .then(response => {
        console.log('Here are the movies', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was a error:', err))
