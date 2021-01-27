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
  deleteFn
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
          loggedInUser={user} 
          deleteFn={deleteFn}
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
