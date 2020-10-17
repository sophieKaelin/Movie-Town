const express = require("express")
const fs = require("fs")
const axios = require("axios")

const IMDBRouter = express.Router()

const omdb = process.env.OMDB_API

IMDBRouter.get("/api/movie/title", async (req, res) => {
	const urlString = omdb + 't="' + req.body.title + '"'
	axios
		.get(urlString)
		.then((result) => {
			res.json(result.data)
		})
		.catch((err) => console.log(err))
})

IMDBRouter.get("/api/movie/id", async (req, res) => {
	const urlString = omdb + "i=" + req.query.id
	axios
		.get(urlString)
		.then((result) => {
			res.json(result.data)
		})
		.catch((err) => console.log(err))
})

module.exports = IMDBRouter
