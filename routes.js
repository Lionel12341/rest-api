const router = require("express").Router()
const ctrl = require("./controllers")

router.get("/health", ctrl.health)

module.exports = router
