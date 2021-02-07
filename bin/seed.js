const mongoose = require('mongoose')
const Celebrity = require('./../models/celebrity.model')
const Movie = require('./../models/movies.model')
const dbName = 'CELEBRITY'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrity = [{
        name: "Mariano Rajoy",
        occupation: "Politician",
        catchPhrase: "Los españoles, muy españoles y mucho españoles."
    }, {
        name: "Sergio Ramos",
        occupation: "Football player",
        catchPhrase: "Morry Crismas"
    },

    {
        name: "Ignatius Farray",
        occupation: "Comedian",
        catchPhrase: "Allright."
    }
]

Celebrity
    .create(celebrity)
    .then(res => {
        console.log(`There are ${res.length} celebritites `)
        mongoose.connection.close()
    })
    .catch(err => console.log(`ERROR:`, err))


const movie = [{
        title: "Pulp Fiction",
        genre: "Crime",
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    }, {
        title: "Forrest Gump",
        genre: "Drama",
        plot: "Historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    },

    {
        title: "Borat",
        genre: "Comedy",
        plot: "Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world."
    }
]

Movie
    .create(movie)
    .then(res => {
        console.log(`There are ${res.length} movies `)
        mongoose.connection.close()
    })
    .catch(err => console.log(`ERROR:`, err))