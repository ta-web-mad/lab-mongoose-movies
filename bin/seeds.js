const mongoose = require("mongoose")
const Celebrity = require("./../model/celebrity.model")

const dbName ="celebs"
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
    {
        name: "Samuel L. Jackson",
        occupation: "actor",
        catchPhrase: "And You Will Know My Name Is The Lord When I Lay My Vengeance Upon You!"
    },
    {
        name: "Uma Thurman",
        occupation: "actress",
        catchPhrase: "When I arrive at my destination, I am gonna kill Bill."
    },
    {
        name: "Christoph Waltz",
        occupation: "actor",
        catchPhrase: "Facts can be so misleading, where rumors, true or false, are often revealing."
    }
]

Celebrity.create(celebrities)
    .then(response => {
        console.log("Number of celebs created:", response.length)
        // mongoose.connection.close()
    })
    .catch(err => console.log("Error", err))