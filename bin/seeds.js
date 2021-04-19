require('dotenv').config()


// DB connection
require('./../config/db.config')

const mongoose = require('mongoose')

//model requirement
const Celebrity = require('./../models/celebrity.model')

// Seed here!

const celebrities = [
    {
       name: 'George Best',
           occupation: 'Futbolista',
           catchPhrase: 'Gasté un montón de dinero en coches, mujeres y alcohol. El resto simplemente lo malgasté'
    },
    {
         name: 'Matias Prats',
             occupation: 'Presentador',
             catchPhrase: 'La NASA sufre un recorte de presupuesto, se ve que no están para tirar cohetes'
    },
    {
      name: 'Martin Luther King',
          occupation: 'Pastor',
          catchPhrase: 'I have a dream'
      },
];

// Code Here

Celebrity
    .create(celebrities)
    .then(response => {
        console.log('Estas son las celebrities!', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))