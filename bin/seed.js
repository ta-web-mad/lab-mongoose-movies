const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbName = 'myCelebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

const thecelebrities = [
    {
        name: 'Tony Stark',
        occupation: 'SuperHero',
        catchPrahse: 'The truth is....I am Iron Man',

    },{
        name: 'Peter Parker',
        occupation: 'SuperHero',
        catchPrahse: 'With great power comes great responsibility. This is my gift, my curse. Who am I? I am Spiderman',
    },{
        name: 'Thor',
        occupation: 'Good of Thunder',
        catchPrahse: 'I am Thor, son of Odin and as long as there is life in my chest ... I can not think of anything else to say. Are you ready to die?',
    },
]

Celebrity
    .create(thecelebrities)
    .then(response => {
        console.log(`creados ${response.length} calebridades en la DB`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
