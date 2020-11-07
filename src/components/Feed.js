import React from "react"
import ReviewCard from "./ReviewCard";

const Feed = ({ review, reviews, user }) => {

    if(user.follows.includes(review.username) || user.username === review.username) {
        return <ReviewCard reviews={reviews} user={user} />
    } else {
        return null
    }
}

export default Feed;