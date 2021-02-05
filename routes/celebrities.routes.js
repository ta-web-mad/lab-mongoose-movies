const express = require("express")
const router = express.Router()
const Celebrity = require("../models/Celebrity.model")

// Endpoints
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) =>
      res.render("celebrities/celebrities-list", { allCelebrities })
    )
    .catch((err) => {
      next(err)
    })
})

module.exports = router
