const express = require('express')
const fs = require("fs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User, Review } = require('../server/schemas')

// const SECRET = "SECRET"

const apiRouter = express.Router()


// *****USER API'S*****

apiRouter.get('/api/users', (req, res) => {
    User.find({}).then(result => {
      res.json(result)
    })
})

apiRouter.get('/api/users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(error => next(error))
})

// apiRouter.post('/api/users', async (req, res) => {
//     const body = req.body
//     let encryptedPassword = ''
//     const pwcrypt = await bcrypt.hash(body.password, 10).then(result => { encryptedPassword = result })
  
//     const newUser = new User({
//         username: body.username,
//         password: encryptedPassword,
//         avatar: body.avatar,
//         follows: [],
//         watched: [],
//         toWatch: [],
//     })
//     newUser.save().then(result => {
//       res.json(result)
//     })
// })

apiRouter.put('/api/users/:id', (req, res, next) => {
    const body = req.body
    const user = {
        avatar: body.avatar,
        follows: body.follows,
        watched: body.watched,
        toWatch: body.toWatch,
    }
  
    User.findByIdAndUpdate(req.params.id, user, { new: true })
      .then(updatedUser => {
        res.json(updatedUser)
      })
      .catch(error => next(error))
})


// *****REVIEW API'S*****

apiRouter.get('/api/reviews', (req, res) => {
    Review.find({}).then(result => {
      res.json(result)
    })
})

apiRouter.get('/api/reviews/:id', (req, res) => {
    Review.findById(req.params.id).then(review => {
      res.json(review)
    })
  })

apiRouter.post('/api/reviews', (req, res) => {
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
    newReview.save().then(result => {
      res.json(result)
    })
})

apiRouter.delete('/api/reviews/:id', (req, res, next) => {
    Review.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(204).end()
      })
      .catch(error => next(error))
})

apiRouter.put('/api/reviews/:id', (req, res, next) => {
    const body = req.body
  
    const review = {
        stars: body.stars,
        content: body.content,
        likes: body.likes,
        comments: body.comments,
    }
  
    Review.findByIdAndUpdate(req.params.id, review, { new: true })
      .then(updatedReview => {
        res.json(updatedReview)
      })
      .catch(error => next(error))
})


// *****LOGIN API'S*****


module.exports = apiRouter

