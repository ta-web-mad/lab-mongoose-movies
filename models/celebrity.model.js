const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema ({
    name: String,
    occupation: String,
    chatPhrase: String
},{
    timestramps: true
})
const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity