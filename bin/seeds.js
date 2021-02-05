const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity.model")
const dbName = "celebrities"

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const celebrities = [
  {
    name: "Wes Anderson",
    occupation: "director",
    catchPhrase: "The details, that's what the world is made of",
  },
  {
    name: "Haruki Murakami",
    occupation: "writer",
    catchPhrase:
      "Whatever it is you're seeking won't come in the form you're expecting",
  },
  {
    name: "Billy Joel",
    occupation: "singer",
    catchPhrase:
      "If you are not doing what you love, you are wasting your time",
  },
]

Celebrity.create(celebrities)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))
