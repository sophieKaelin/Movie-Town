require("dotenv").config()

const mongoose = require("mongoose") //node library that connects to MongoDB

//TODO: move this URL to the ENV file to keep it private: process.env.MONGODB_URI
const url =
    "mongodb+srv://harry_styles:watermelonsugar@movie-town-cluster.kdjzy.mongodb.net/movietowndb?retryWrites=true&w=majority"

//Check for password to access DB
if (process.argv.length < 3) {
    console.log(
        "Missing password, structure arguments like: node mongo.js <password>"
    )
    process.exit(1)
}

const password = process.argv[2]

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
