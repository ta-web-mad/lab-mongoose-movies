const { Mongoose } = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies');

require('dotenv').config()


// DB connection
require('./../config/db.config')


// Seed here!
const celebrity = [
    {
        name: 'Tom Cruise',
        occupation: 'Actor',
        catchPhrase: 'Hasta la vista baby'
    },

    {
        name: 'Ronaldinho',
        occupation: 'Soccer player',
        catchPhrase: 'Quer namorar comigo?'
    },

    {
        name: 'Buzz Lightyear',
        occupation: 'Astronaut',
        catchPhrase: 'To infinity... and beyond!'
    }
];

Celebrity
    .create(celebrity)
    .then(list => {
        console.log('Celebrity', list)
    })
    .catch(err => console.log('Error!', err))

const movies = [
    {
        title: 'Lord of the rings',
        genre: 'Fantasy',
        plot: 'fantastic'
    },

    {
        title: 'Avengers',
        genre: 'Acction',
        plot: 'kill Thanos'
    },

    {
        title: 'The Social Network',
        genre: 'Real History',
        plot: 'Facebook'
    }
];

Movies
    .create(movies)
    .then(list => {
        console.log('Movies', list)
    })
    .catch(err => console.log('Error!', err))