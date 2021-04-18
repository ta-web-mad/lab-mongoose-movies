require('dotenv').config()


// DB connection
require('./../config/db.config')


// 1 Mongooose
const mongoose = require('mongoose')



// 2. - Model requirement
const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')


// Seed here!

const celebrities = [
    {
        name: "Amaia Salamanca",
        occupation: "Actress",
        catchPhrase: "We have to live life as if it was our last day"
    },
     {
        name: "Cristiano Ronaldo",
        occupation: "Sportsman",
        catchPhrase: "I am handsome and rich and they envy me"
    },
     {
        name: "Pablo Motos",
        occupation: "Presenter",
        catchPhrase: "El hormiguero is the best program in the world"
    },
]



Celebrity
    .create(celebrities)
    .then(response => {
        console.log('Estas son las celebridades!', response)
        //mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))


//----------0----------



const movies = [
    {
        title: "Taken",
        genre: "Action",
        plot: "Kidnapping people"
    },
     {
        title: "Spider-man",
        genre: "Adventures",
        plot: "A spider man who saves the people of New York"
    },
     {
        title: "Indiana-Jones",
        genre: "Adventures",
        plot: "The adventures of indiana jones"
    },
]



Movie
    .create(movies)
    .then(response => {
        console.log('Estas son las peliculas!', response)
        //mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))

