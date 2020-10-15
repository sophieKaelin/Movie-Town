require("dotenv").config()
const mongoose = require("mongoose")
const { User, Review } = require("./schemas")
const fs = require("fs")
const bcrypt = require("bcrypt")

//READ IN USER DATA
const data = fs.readFileSync("server/sampledata.json")
const jsonData = JSON.parse(data)

jsonData.users.map((thing) => {
    console.log(thing)
    thing.password = bcrypt.hash(thing.password, 10).then((newPassword) => {
        const newThing = new User({
            username: thing.username,
            password: newPassword,
            avatar: thing.avatar,
            follows: thing.follows,
            watched: thing.watched,
            toWatch: thing.toWatch,
        })
        console.log(newThing)
        newThing.save().then((result) => {
            console.log("new user added")
        })
    })
})

jsonData.reviews.map((thing) => {
    const newThing = new Review({
        username: thing.username,
        titleid: thing.titleid,
        timestamp: thing.timestamp,
        content: thing.content,
        likes: thing.likes,
        comments: thing.comments,
    })

    newThing.save().then((result) => {
        console.log("new review added")
    })
})
