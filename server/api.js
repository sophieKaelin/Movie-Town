const express = require("express")
const fs = require("fs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User, Review } = require("../server/schemas")

// const SECRET = "SECRET"

const apiRouter = express.Router()

//**** LOGIN ****/

//Retrieve User data from a username
const getUser = async (user) => {
	// console.log(user)
	return await User.findOne({ username: user }).then((result) => {
		return result
	})
}

apiRouter.post("/api/login", async (request, response) => {
	const username = request.body.username
	const password = request.body.password
	const user = await getUser(username)
	console.log(user)
	if (!user) {
		//check if the user exists
		return response
			.status(401)
			.json({ error: "invalid username or password" })
	} else {
		if (await bcrypt.compare(password, user.password)) {
			console.log("Password is gooooood")
			const userForToken = {
				id: user.id,
				username: user.username,
			}
			const token = jwt.sign(userForToken, process.env.SECRET_KEY)
			return response
				.status(200)
				.json({ token, username: user.username, name: user.name })
		} else {
			return response
				.status(401)
				.json({ error: "Invalid username or password" })
		}
	}
})

// *****USER API'S*****

apiRouter.get("/api/users", (req, res) => {
	User.find({}).then((result) => {
		res.json(result)
	})
})

//TODO: Can merge these two together???
apiRouter.get("/api/users/username", (req, res) => {
	User.findOne({ username: req.query.username })
		.then((user) => {
			console.log(req.query.username)
			res.json(user)
		})
		.catch((error) => next(error))
})

apiRouter.get("/api/users/:username", (req, res) => {
	User.findOne({ username: req.params.username })
		.then((user) => {
			console.log(req.query.username)
			res.json(user)
		})
		.catch((error) => next(error))
})

apiRouter.post("/api/users", async (req, res) => {
	const body = req.body
	let encryptedPassword = ""
	const pwcrypt = await bcrypt.hash(body.password, 10).then((result) => {
		encryptedPassword = result
	})

	const newUser = new User({
		username: body.username,
		password: encryptedPassword,
		avatar: body.avatar,
		follows: [],
		watched: [],
		toWatch: [],
	})
	newUser.save().then((result) => {
		res.json(result)
	})
})

apiRouter.put("/api/users/:id/follows", (req, res, next) => {
	const body = req.body
	const user = {
		follows: body.follows,
	}

	User.findByIdAndUpdate(req.body._id, user, { new: true })
		.then((updatedUser) => {
			res.json(updatedUser)
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/users/:id/watched", (req, res, next) => {
	const body = req.body
	const user = {
		watched: body.watched,
	}

	User.findByIdAndUpdate(req.params.id, user, { new: true })
		.then((updatedUser) => {
			res.json(updatedUser)
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/users/:id/toWatch", (req, res, next) => {
	const body = req.body
	const user = {
		toWatch: body.toWatch,
	}

	User.findByIdAndUpdate(req.params.id, user, { new: true })
		.then((updatedUser) => {
			res.json(updatedUser)
		})
		.catch((error) => next(error))
})

// *****REVIEW API'S*****

apiRouter.get("/api/reviews", (req, res) => {
	Review.find({}).then((result) => {
		res.json(result)
	})
})

apiRouter.get("/api/reviews/by/:username", (req, res) => {
	Review.find({ username: req.params.username }).then((reviews) => {
		res.json(reviews)
	})
})

apiRouter.get("/api/reviews/:id", (req, res) => {
	Review.findById(req.params.id).then((review) => {
		res.json(review)
	})
})

apiRouter.post("/api/reviews", (req, res) => {
	const body = req.body

	const newReview = new Review({
		username: body.username,
		titleid: body.titleid,
		timestamp: body.timestamp,
		stars: body.stars,
		content: body.content,
		likes: body.likes,
		comments: body.comments,
	})
	newReview.save().then((result) => {
		res.json(result)
	})
})

apiRouter.delete("/api/reviews/:id", (req, res, next) => {
	Review.findByIdAndRemove(req.params.id)
		.then((result) => {
			res.status(204).end()
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/reviews/:id/stars", (req, res, next) => {
	const body = req.body

	const review = {
		stars: body.stars,
	}

	Review.findByIdAndUpdate(req.params.id, review, { new: true })
		.then((updatedReview) => {
			res.json(updatedReview)
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/reviews/:id/content", (req, res, next) => {
	const body = req.body

	const review = {
		content: body.content,
	}

	Review.findByIdAndUpdate(req.params.id, review, { new: true })
		.then((updatedReview) => {
			res.json(updatedReview)
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/reviews/:id/likes", (req, res, next) => {
	const body = req.body

	const review = {
		likes: body.likes,
	}
	Review.findByIdAndUpdate(req.params.id, review, { new: true })
		.then((updatedReview) => {
			res.json(updatedReview)
		})
		.catch((error) => next(error))
})

apiRouter.put("/api/reviews/:id/comments", (req, res, next) => {
	const body = req.body

	const review = {
		comments: body.comments,
	}

	console.log(review)
	Review.findByIdAndUpdate(req.params.id, review, { new: true })
		.then((updatedReview) => {
			res.json(updatedReview)
		})
		.catch((error) => next(error))
})

module.exports = apiRouter
