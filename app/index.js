const express = require('express')
const cors = require("cors")
const morgan = require("morgan")

const router = require('./routes/route')
const app = express()
const { MORGAN_FORMAT } = require('../config/application')

app.use(express.json())
app.use(morgan(MORGAN_FORMAT))
app.use(cors())

module.exports = router.apply(app)