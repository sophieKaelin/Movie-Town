import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Container, Row, Col } from "react-bootstrap"
import "../style/MovieCard.css"

import ReviewCard from "./ReviewCard"
import ReviewModal from "./ReviewModal.js"
import axios from "axios"

export const ReviewCardList = ({
	user,
	addNewReview,
	movie,
	setMovie,
	show,
	handleClose,
	handleShow,
	users,
	setUser,
	setUsers,
}) => {
	const [reviews, setReviews] = useState([])

	const reviewButtonStyle = {
		marginTop: "50px",
		padding: "15px",
	}

	useEffect(() => {
		if (user) {
			console.log("USE EFFECT")
			axios
				.get("http://localhost:3001/api/reviews/by/" + user.username)
				.then((res) => {
					console.log(res)
					setReviews(res.data)
				})
				.catch((err) => console.log(err))
		}
	}, [user])

	return (
		<Container>
			<Row>
				<Col>
					<Button
						className="btn-block"
						size="lg"
						style={reviewButtonStyle}
						onClick={handleShow}
					>
						Write Review
					</Button>
				</Col>
			</Row>
			<Row id="movieListRow">
				<Col xs={2}></Col>
				<Col>
					{reviews.map((m) => {
						console.log(m)
						return <ReviewCard reviews={reviews} user={user} />
					})}
					<ReviewModal
						user={user}
						addNewReview={addNewReview}
						movie={movie}
						setMovie={setMovie}
						show={show}
						handleClose={handleClose}
					/>
				</Col>
				<Col xs={2}></Col>
			</Row>
		</Container>
	)
}

export default ReviewCardList
