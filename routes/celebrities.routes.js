const express = require("express")
const router = express.Router()
const formatName = require("../helpers")
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
  name = formatName(name)

  //  Format occupation
  occupation = formatName(occupation)

  //Format catch phrase
  catchPhrase = formatName(catchPhrase)

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() =>
      Celebrity.find()
        .select("name")
        .then((allCelebrities) =>
          res.render("celebrities/celebrities-list", { allCelebrities })
        )
    )
    .catch((err) => res.render("celebrities/new-celebrity"))
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

// Edit celebrity
router.get("/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) =>
      res.render("celebrities/celebrities-edit", { celebrity })
    )
    .catch((err) => next(err))
})

router.post("/:id/", (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body

  // Format name
  name = formatName(name)

  //  Format occupation
  occupation = formatName(occupation)

  //Format catch phrase
  catchPhrase = formatName(catchPhrase)

  Celebrity.findByIdAndUpdate(
    req.params.id,
    { name, occupation, catchPhrase },
    { omitUndefined: true }
  )
    .then(() =>
      Celebrity.find()
        .select("name")
        .then((allCelebrities) =>
          res.render("celebrities/celebrities-list", { allCelebrities })
        )
    )
    .catch((err) => next(err))
})

module.exports = router
