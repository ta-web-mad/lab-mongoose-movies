require('dotenv').config()


// DB connection
require('./../config/db.config')


// Seed here!
// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
const Celebrity = require('./../models/celebrity')

// 3 .- Data to seed
const celebrities = [
    {
        name: "Will Smith",
        occupation: "Actor",
        catchPhrase: "Aw, hell no!"
    },
    {
        name: "Robyn Rihanna",
        occupation: "Singer",
        catchPhrase: "The minute you learn to love yoursel, you won't want to be anyone else"
    },
    {
        name: "Leo Messi",
        occupation: "Football Player",
        catchPhrase: "The best decisions aren’t made with your mind, but with your instinct"
    },
    {
        name: "Elon Musk",
        occupation: "Businessman",
        catchPhrase: "I could either watch it happen or be a part of it"
    }
]

// 4.- TSeeding time!
Celebrity
    .create(celebrities)
    .then(data => {
        console.log('VIP Here:', data)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))