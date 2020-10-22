import axios from 'axios'

const baseURL = "/api/"

const addNewReview = (newReview) => {
    axios.post(baseURL + "reviews", newReview).then((response) => {
        console.log(response)
        setReviews([...reviews, response.data])
    })
}

const deleteReview = (review) => {
    console.log("delete", review)
    axios.delete(baseURL + "reviews/" + review.id).then((response) => {
        console.log("delete succeeded")
        const newReviews = reviews.filter((r) => r.id !== review.id)
        setReviews(newReviews)
    })
}

export default {addNewReview, deleteReview}