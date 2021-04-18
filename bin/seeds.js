require('dotenv').config()

// 0-. DB connection
require('./../config/db.config')
console.log('Connection opened.')

// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
//Celebrities:
const Celebrity = require('./../models/Celebrity.model')
//Movies;
const Movie = require('./../models/Movie.model')

// 3 .- Data to seed
//Celebrities:
const celebrities = [{
        name: 'Link',
        occupation: 'Hero of Hyrule',
        catchPhrase: 'HYAAHHH!'
    },
    {
        name: 'Mario',
        occupation: 'Plumber',
        catchPhrase: "MAMMA MIA!"
    },
    {
        name: 'Captain Falcon',
        occupation: 'Racer',
        catchPhrase: 'FALCOOOOON PUNCH!'
    }
]
//Movies:
const movies = [{
        title: 'Super Smash Bros. Ultimate',
        genre: ['Party', 'Fighting'],
        plot: 'Videogame icons clash in this massive crossover! Choose your fighter and join the ULTIMATE Battle!'
    },
    {
        title: 'The Legend of Zelda: Breath of The Wild',
        genre: ['Action', 'Adventure', 'RPG'],
        plot: 'Follow Link and make your own adventure in the Hyrule Kingdom.'
    },
    {
        title: 'F-Zero',
        genre: ['Racing'],
        plot: 'Set in the far future, race against mercenaries, heroes, nuts, and aliens for first place in this (very) fast paced racing game.'
    }
]

// 4.- Seed
//Celebrities:
Celebrity
    .create(celebrities)
    .then(creation => {
        console.log('Seeded celebrities:', creation)
        // mongoose.connection.close()
        // console.log('Connection closed...')
    })
    .catch(err => console.log('SEEDING ERROR:', err))
//Movies:
Movie
    .create(movies)
    .then(creation => {
        console.log('Seeded movies:', creation)
        mongoose.connection.close()
        console.log('Connection closed...')
    })
    .catch(err => console.log('SEEDING ERROR:', err))


//In Terminal (just once) to insert seed:
//$ node bin/seeds.js