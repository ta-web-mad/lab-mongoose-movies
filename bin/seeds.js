const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

const dbName = 'celeb-movies-lab'
mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
//     {
//         name: 'Tony Hawk',
//         occupation: 'Profesional Skateboarder',
//         catchPhrase: 'Skate or Die'
//     },
//     {
//         name: 'Rick Sanchez',
//         occupation: 'Smartest men in the universe',
//         catchPhrase: "That's the way the news goes"
//     },
//     {
//         name: 'Frank Zappa',
//         occupation: 'Musicician',
//         catchPhrase: 'Chill Dude'
//     }
// ]

// Celebrity
//     .create(celebrities)
//     .then(res => {
//         console.log(`${res.length} celebrities have been created in the DB`)
//         mongoose.connection.close()
//     }) 
// .catch(err => console.log('Error:', err))
const movies = [
    {
        title: 'Inception',
        genre: 'Sci-Fi',
        plot: 'Dreams inside dreams'
    },
    {
        title: "Dude, Where's my car",
        genre: 'Comedy',
        plot: 'Lost car adventure'
    },
    {
        title: 'Life of Brian',
        genre: 'Comedy',
        plot: 'Jesus 2.0'
    }
]

Movie
    .create(movies)
    .then(res => {
        console.log(`${res.length} movies have been created in the DB`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error', err))