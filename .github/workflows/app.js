'use strict'
require('./bin/database')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ceps = require('./routes/ceps')

// express app will use body-parser to get data from POST
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// Define a prefix for all routes
// Can define something unique like MyRestAPI
// We'll just leave it so all routes are relative to '/'
app.use('/', ceps)

module.exports = app
