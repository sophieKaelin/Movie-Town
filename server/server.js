require("dotenv").config()
const http = require("http")
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const apiRouter = require("./api")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("build"))
app.use(apiRouter)

const path = require("path")
app.get("*", (request, response) => {
	response.sendFile(path.join(__dirname, "../build/index.html"))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
