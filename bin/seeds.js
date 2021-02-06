const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

const dbName = 'allCelebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)


const threeCelebrities = [
    {
        name: 'Britney Spears',
        occupation: 'singer',
        catchPhrase: 'Its Britney ..tch!'
    },
    {
        name: 'Luis Fonsi',
        occupation: 'singer',
        catchPhrase: 'Despacito'
    },
    {
        name: 'Monch',
        occupation: 'developer',
        catchPhrase: 'La última y nos vamos!'
    },
]

    Celebrity
        .create(threeCelebrities)
        .then(response => {
            console.log(`Created ${response.length} celebrities in DB`)
            mongoose.connection.close();
        })

        .catch(err => console.log(err))




const threeMovies = [
    {
        title: 'Harry Potter',
        genre: 'Fantasy',
        plot: 'Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.'
    },
    {
        title: 'Harry Potter 2',
        genre: 'Fantasy',
        plot: 'Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.'
    },
    {
        title: 'Harry Potter 3',
        genre: 'Fantasy',
        plot: 'Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.'
    },
]

Movie
    .create(threeMovies)
    .then(response => {
        console.log(`Created ${response.length} movies in DB`)
        mongoose.connection.close();
    })

    .catch(err => console.log(err))

