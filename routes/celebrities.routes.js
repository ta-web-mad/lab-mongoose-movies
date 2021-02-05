const express = require("express")
const router = express.Router()
const Celebrity = require("../models/Celebrity.model")

// Endpoints
router.get("/", (req, res, next) =>
  Celebrity.find()
    .select("name")
    .then((allCelebrities) =>
      res.render("celebrities/celebrities-list", { allCelebrities })
    )
    .catch((err) => next(err))
)

router.get("/:id", (req, res, next) =>
  Celebrity.findById(req.params.id)
    .then((celebrity) =>
      res.render("celebrities/celebrity-detail", { celebrity })
    )
    .catch((err) => next(err))
)

module.exports = router
