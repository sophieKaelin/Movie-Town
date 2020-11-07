import React, { useState } from "react"
import ReviewCard from "./ReviewCard"

const Feed = ({ review, user, users, reviews, setReviews }) => {
	let reviewUser = ""
	if (users !== undefined) {
		users.map((u) =>
			u.username === review.username ? (reviewUser = u) : null
		)
	}

	if (
		user.follows.includes(review.username) ||
		user.username === review.username
	) {
		return (
			<ReviewCard
				review={review}
				reviewUser={reviewUser}
				user={user}
				reviews={reviews}
				setReviews={setReviews}
			/>
		)
	} else {
		return null
	}
}

export default Feed
