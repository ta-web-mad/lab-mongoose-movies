const mongoose = require("mongoose")
//const Celebrity = require("../models/Celebrity.model")
const dbName = "mongooseMovies"

const Movie = require("../models/Movie.model")

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// const celebrities = [
//   {
//     name: "Wes Anderson",
//     occupation: "director",
//     catchPhrase: "The details, that's what the world is made of",
//   },
//   {
//     name: "Haruki Murakami",
//     occupation: "writer",
//     catchPhrase:
//       "Whatever it is you're seeking won't come in the form you're expecting",
//   },
//   {
//     name: "Billy Joel",
//     occupation: "singer",
//     catchPhrase:
//       "If you are not doing what you love, you are wasting your time",
//   },
// ]

// Celebrity.create(celebrities)
//   .then(() => mongoose.connection.close())
//   .catch((err) => console.error(`Following error occured: \n ${err}`))

const movies = [
  {
    title: "The Shawshank Redeption",
    genre: ["Drama"],
    plot:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
    plotKeywords: [
      "wrongful imprisonment",
      "escape from prison",
      "Stephen King",
    ],
  },
  {
    title: "The Darjeeling Limited",
    genre: ["Adventure", "Comedy", "Drama"],
    plot:
      "A year after the accidental death of their father, three brothers -- each suffering from depression - meet for a train trip across India. Francis, the eldest, has organized it. The brothers argue, sulk, resent each other, and fight. The youngest, Jack, estranged from his girlfriend, is attracted to one of the train's attendants. Peter has left his pregnant wife at home, and he buys a venomous snake. After a few days, Francis discloses their surprising and disconcerting destination. Amid foreign surroundings, can the brothers sort out their differences? A funeral, a meditation, a hilltop ritual, and the Bengal Lancer figure in the reconciliation.",
    plotKeywords: ["train", "india", "journey", "reconciliation"],
  },
  {
    title: "The Princess Bride",
    genre: ["Adventure", "Family", "Fantasy", "Romance"],
    plot:
      "When the lovely Buttercup is kidnapped by a ghastly gang intent on fomenting an international incident they find they are pursued by the Dread Pirate Roberts who just might be Westley, her one true love. Also after everyone is nasty Prince Humperdinck to whom Buttercup is now betrothed but who seems to care little for her continued survival. The stage is set for swordfights, monsters, and tortures - but will Grandpa be allowed to finish telling the story with all these kissy bits?",
    plotKeywords: ["true love", "giant", "pirate", "princess", "fairy tale"],
  },
]

Movie.create(movies)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))
