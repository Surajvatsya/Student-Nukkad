const express = require("express")
const router = express.Router()

const { register } = require("./Auth")

router.route("/register").post(register)

module.exports = router

app.use("/api/auth", require("./Auth/route"))