require("dotenv").config()

const mongoose = require("mongoose") //node library that connects to MongoDB

const url = process.env.MONGODB_URI
console.log(url)

//Connect to the DB
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		console.log("You are connected to the DB")
	})
	.catch((error) => {
		console.log(error)
		console.log("Could not connect to DB")
	})

const usersSchema = new mongoose.Schema({
	username: String,
	password: String,
	avatar: String,
	follows: Array,
	watched: Array,
	toWatch: Array,
})

const User = mongoose.model("User", usersSchema)

const reviewSchema = new mongoose.Schema({
	username: String,
	titleid: String,
	timestamp: String,
	stars: Number,
	content: String,
	likes: Array,
	comments: Array,
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = { User, Review }
