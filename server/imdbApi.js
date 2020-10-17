const express = require("express")
const fs = require("fs")
const axios = require("axios")

const IMDBRouter = express.Router()

const ombd = process.env.OMBD_API

IMDBRouter.get("/api/movie/title", (req, res) => {
	return JSON.parse(axios.get(omdb + "t=" + req.body.title))
})

module.exports = IMDBRouter
