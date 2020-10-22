import axios from 'axios'

const baseURL = "/api/"

const addNewReview = (newReview) => {
    axios.post(baseURL + "reviews", newReview)
}

const deleteReview = (review) => {
    console.log("delete", review)
    axios.delete(baseURL + "reviews/" + review.id)
}

const likeReview = (review, user) => {
    review.likes.push(user.username)
    axios.put(baseURL + "reviews/" + review.id + "likes", review)
}

const unlikeReview = (review, user) => {
    const index = review.likes.indexOf(user.username)
    review.likes.splice(index, 1)
    axios.put(baseURL + "reviews/" + review.id + "reviews", review)
}

const addComment = (review, comment) => {
    review.comments.push(comment)
    axios.put(baseURL + "reviews/" + review.id + "comments", comment)
}

const editStars = (stars, review) => {
    review.stars = stars
    axios.put(baseURL + "reviews/" + review.id + "stars", review)
}

const editContent = (content, review) => {
    review.content = content
    axios.put(baseURL + "reviews/" + review.id + "content", content)
}

export default {addNewReview, deleteReview, likeReview, unlikeReview, addComment, editStars, editContent}