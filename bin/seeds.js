const Celebrity = require('../models/celebrity.model')

require('dotenv').config()

const mongoose = require('mongoose')

const Celeb = require('./../models/celebrity.model')
const Movie = require('./../models/movie.model')

// DB connection
require('./../config/db.config')

Celeb.collection.drop();
Movie.collection.drop();
// Seed here!

const celebrities = [
    {
        name: "Perro Sanchez",
        occupation: "Politician",
        catchPhrase: "Ser malos! Buenas noches colegas"
    },
    {
        name: "Sergio Ramos",
        occupation: "Footballer",
        catchPhrase: "Unos jugaban al baloncesto, otros al basket..."
    },
    {
        name: "Victor del Diario de Patricia",
        occupation: "TV celebrity",
        catchPhrase: "Fumo pa' hacerme el chulo"
    },
]

const movies = [
    {
        title: "Avengers",
        genre: "Action",
        plot: "In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, and Thor to form a team capable of stopping Thor's brother Loki from subjugating Earth"
    },
    {
        title: "Mortal Kombat",
        genre: "Fantasy",
        plot: "Un luchador de MMA Cole Young, acostumbrado a recibir una paliza por dinero, desconoce su herencia, o por qué el hechicero Shang Tsung de Outworld ha enviado a su mejor guerrero, Sub-Zero, un Cryomancer de otro mundo, para cazar a Cole. Temiendo por la seguridad de su familia, Cole va en busca de Sonya Blade en dirección a Jax, un comandante de las Fuerzas Especiales que lleva el mismo dragón extraño con el que nació Cole. Pronto, se encuentra en el templo de Lord Raiden, un dios anciano y el protector de Earthrealm, que otorga refugio a aquellos que llevan la marca. Aquí, Cole entrena con los experimentados guerreros Liu Kang, Kung Lao y el mercenario rebelde Kano, mientras se prepara para enfrentarse a los mayores campeones"
    },
    {
        title: "Intocables",
        genre: "Drama, Comedy",
        plot: "La película narra la relación entre dos personajes totalmente opuestos y procedentes de entornos diferentes. Uno, Driss, un joven de origen senegalés, vive en un barrio obrero de París, con antecedentes penales, vitalista, descarado, divertido e irreflexivo; el otro, Phillippe, un rico tetrapléjico ya mayor, culto y muy poco espontáneo, que necesita un ayudante personal. Driss acude a la entrevista esperando ser rechazado y con la sola pretensión de poder sellar sus papeles para cobrar el seguro de desempleo. Sin embargo, y para su sorpresa, es contratado, pese a su descaro y a no tener ninguna formación profesional. Los motivos de Phillippe, harto de lidiar con cuidadores que sentían piedad de él, fue el ver que no le tenía compasión alguna y el reto de conseguir que el rebelde joven fuera capaz de realizar un trabajo y adaptarse a unos estrictos horarios y rutinas responsablemente."
    }
]


Celeb
    .create(celebrities)
    .then(res => {
        console.log("Hola, ya hay famosos");
        mongoose.connection.close()
    })
    .catch(err => console.log('se produjo un error...', err))

Movie
    .create(movies)
    .then(res => {
        console.log("Hola, ya hay peliculas");
        mongoose.connection.close()
    })
    .catch(err => console.log('se produjo un error...', err))
