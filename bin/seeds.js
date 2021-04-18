const { Mongoose } = require('mongoose');
const Celebrity = require('../models/celebrity');

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