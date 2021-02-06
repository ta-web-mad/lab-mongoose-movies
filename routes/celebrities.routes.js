const express = require("express")
const router = express.Router()
const Celebrity = require("../models/Celebrity.model")

// Endpoints
// Celebrities list
router.get("/", (req, res, next) =>
  Celebrity.find()
    .select("name")
    .then((allCelebrities) =>
      res.render("celebrities/celebrities-list", { allCelebrities })
    )
    .catch((err) => next(err))
)

// Create celebrity
router.get("/new-celebrity", (req, res) =>
  res.render("celebrities/new-celebrity")
)

router.post("/new-celebrity", (req, res) => {
  let { name, occupation, catchPhrase } = req.body

  // Format name
  let [artistName, artistLastname] = name.split(" ")
  artistName =
    artistName[0].toUpperCase() + artistName.substring(1).toLowerCase()
  artistLastname =
    artistLastname?.charAt(0).toUpperCase() +
    artistLastname?.substring(1).toLowerCase()
  name = artistName.concat(artistLastname ? artistLastname : "")

  //  Format occupation
  occupation =
    occupation.charAt(0).toUpperCase() + occupation.substring(1).toLowerCase()

  //Format catch phrase
  catchPhrase =
    catchPhrase.charAt(0).toUpperCase() + catchPhrase.substring(1).toLowerCase()

  Celebrity.create({ name, occupation, catchPhrase })
    .then((newCelebrity) =>
      Celebrity.find()
        .select("name")
        .then((allCelebrities) =>
          res.render("celebrities/celebrities-list", { allCelebrities })
        )
    )
    .catch((err) => {
      res.render("celebrities/new-celebrity")
    })
})

// Celebrity detail
router.get("/:id", (req, res, next) =>
  Celebrity.findById(req.params.id)
    .then((celebrity) =>
      res.render("celebrities/celebrity-detail", { celebrity })
    )
    .catch((err) => next(err))
)

// Delete celebrity
router.post("/:id/delete", (req, res, next) =>
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() =>
      Celebrity.find()
        .select("name")
        .then((allCelebrities) =>
          res.render("celebrities/celebrities-list", { allCelebrities })
        )
    )
    .catch((err) => next(err))
)
module.exports = router
