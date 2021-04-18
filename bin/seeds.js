require('dotenv').config()


// DB connection
require('./../config/db.config')

const mongoose = require('mongoose');
const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')


Celebrity.collection.drop()
Movie.collection.drop()
// Seed here!

const celebrities = [
    {
        name: 'Arnold',
        occupation: 'actor',
        catchPhrase: 'Ill be back'

    },
    {
        name: 'Bruce Willis',
        occupation: 'actor',
        catchPhrase: 'Yippee-ki-yay, motherfucker'

    }, {
        name: 'Clint Eastwood',
        occupation: 'director',
        catchPhrase: 'I know what youre thinking, punk'

    },
]

const movies = [
    {
        title: 'Hello world',
        genre: 'drama',
        plot: 'first programming interaction'

    },
    {
        title: 'Javascript wars',
        genre: 'action',
        plot: 'war of javascript vs php'
    },
    {
        title: 'Programming galaxy',
        genre: 'adventure',
        plot: 'meet the jedis of programming defending the galaxy'

    },
]

Celebrity
    .create(celebrities)
    .then(elm => {
        console.log('Estos son las celebrities', elm);
    })
    .catch(err => console.log("Error found", err))

Movie
    .create(movies)
    .then(elm => {
        console.log('Estos son las pelis: ', elm);
    })
    .catch(err => console.log("Error found", err))