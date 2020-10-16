const express = require('express')
const fs = require("fs")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const Review = require('../server/schemas')
// const User = require('../server/schemas')

// const SECRET = "SECRET"

const rawData = fs.readFileSync('./server/sampledata.json')
const data = JSON.parse(rawData)

const apiRouter = express.Router()

module.exports = apiRouter
