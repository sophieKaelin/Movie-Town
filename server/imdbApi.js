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

IMDBRouter.get("/api/movies", async (req, res) => {
	let results = []
	for (const id of req.query.id) {
		const urlString = omdb + "i=" + id
		results.push(
			await axios.get(urlString).then((result) => {
				return result.data
			})
		)
	}

	res.send(results)
})

module.exports = IMDBRouter
