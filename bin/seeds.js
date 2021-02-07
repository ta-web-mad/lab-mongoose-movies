// const mongoose = require("mongoose")
// const Celebrity = require("./../model/celebrity.model")

// const dbName ="celebs"
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
//     {
//         name: "Samuel L. Jackson",
//         occupation: "actor",
//         catchPhrase: "And You Will Know My Name Is The Lord When I Lay My Vengeance Upon You!"
//     },
//     {
//         name: "Uma Thurman",
//         occupation: "actress",
//         catchPhrase: "When I arrive at my destination, I am gonna kill Bill."
//     },
//     {
//         name: "Christoph Waltz",
//         occupation: "actor",
//         catchPhrase: "Facts can be so misleading, where rumors, true or false, are often revealing."
//     }
// ]

// Celebrity.create(celebrities)
//     .then(response => {
//         console.log("Number of celebs created:", response.length)
//         // mongoose.connection.close()
//     })
//     .catch(err => console.log("Error", err))


const mongoose = require("mongoose")
const Movie = require("./../model/movie.model")

const dbName ="celebs"
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: "Pulp Fiction",
        genre: "Thriller",
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        title: "Kill Bill: Vol. I & II",
        genre: "Action",
        plot: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
    },
    {
        title: "Inglorious Basterds",
        genre: "Drama",
        plot: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
    }
]

Movie.create(movies)
    .then(response => {
        console.log("Number of movies created:", response.length)
        // mongoose.connection.close()
    })
    .catch(err => console.log("Error", err))