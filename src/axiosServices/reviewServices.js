import axios from 'axios'
import { useEffect } from "react"

//const baseURL = "/api/" **not working
const baseURL = "http://localhost:3001/api/"

const addNewReview = (newReview, reviews, setReviews) => {
    axios.post(baseURL + "reviews", newReview)
    .then((response) => {
        console.log(response)
        setReviews([...reviews, response.data])
    })
}

const deleteReview = (review, reviews, setReviews) => {
    console.log("delete", review)
    axios.delete(baseURL + "reviews/" + review._id)
    .then((response) => {
        console.log("delete succeeded")
        const newReviews = reviews.filter((r) => r.id !== review._id)
        setReviews(newReviews)
    })
}

const likeReview = (review, user, reviews, setReviews) => {
    review.likes.push(user.username)
    axios.put(baseURL + "reviews/" + review.id + "likes", review)
    .then((response) => {
        setReviews(reviews.map((r) => (r.id !== review.id ? r : response.data)))
    })
}

const unlikeReview = (review, user, reviews, setReviews) => {
    const index = review.likes.indexOf(user.username)
    review.likes.splice(index, 1)
    axios.put(baseURL + "reviews/" + review.id + "reviews", review)
    .then((response) => {
        setReviews(reviews.map((r) => (r.id !== review.id ? r : response.data)))
    })
}

const addComment = (review, comment, reviews, setReviews) => {
    review.comments.push(comment)
    axios.put(baseURL + "reviews/" + review.id + "comments", comment)
    .then((response) => {
        setReviews(reviews.map((r) => (r.id !== review.id ? r : response.data)))
    })
}

const editStars = (stars, review, reviews, setReviews) => {
    review.stars = stars
    axios.put(baseURL + "reviews/" + review.id + "stars", review)
    .then((response) => {
        setReviews(
            reviews.map((r) => (r.id !== review.id ? r : response.data))
        )
    })
}

const editContent = (content, review, reviews, setReviews) => {
    review.content = content
    axios.put(baseURL + "reviews/" + review.id + "content", content)
    .then((response) => {
        setReviews(reviews.map((r) => (r.id !== review.id ? r : response.data)))
    })
}

export default {addNewReview, deleteReview, likeReview, unlikeReview, addComment, editStars, editContent}