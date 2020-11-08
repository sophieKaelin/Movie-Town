import React, { useState } from "react"
import ReviewCard from "./ReviewCard"

const Feed = ({
	review,
	user,
	users,
	reviews,
	setReviews,
	setUser,
	setUsers,
}) => {
	let reviewUser = ""
	if (users !== undefined && review !== null) {
		users.map((u) =>
			u.username === review.username ? (reviewUser = u) : null
		)
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
					users={users}
					setUser={setUser}
					setUsers={setUsers}
				/>
			)
		} else {
			return null
		}
	} else {
		return null
	}
}

export default Feed
