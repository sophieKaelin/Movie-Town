const express = require("express")
const { User } = require("../server/schemas")

const userRouter = express.Router()

userRouter.get("/api/:user/watched", (req, res) => {
	const { user } = req.params
	User.findOne({ username: user }).then((result) => {
		res.send(result.watched)
	})
})

module.exports = userRouter
