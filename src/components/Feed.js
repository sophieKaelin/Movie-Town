import React, { useState } from "react"
import ReviewCard from "./ReviewCard";

const Feed = ({ review, user, users }) => {
    let reviewUser = ""
    if (users !== undefined) {
        users.map((u) => (u.username === review.username ? reviewUser = u : null))
    } 

    if(user.follows.includes(review.username) || user.username === review.username) {
        return <ReviewCard reviews={review} user={reviewUser} />
    } else {
        return null
    }
}

export default Feed;