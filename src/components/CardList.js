import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Container } from "react-bootstrap"
import "../style/MovieCard.css"

import MovieCard from "./MovieCard"
import ReviewModal from "./ReviewModal.js"
import axios from "axios"

export const CardList = ({
	user,
	addNewReview,
	movie,
	setMovie,
	show,
	handleClose,
	handleShow,
}) => {
	const [movies, setMovies] = useState([])

	const reviewButtonStyle = {
		marginTop: "50px",
		padding: "15px",
	}

	useEffect(() => {
		console.log(user)
		if (user) {
			console.log(user.watched)
			axios
				.get("http://localhost:3001/api/movies", {
					params: { id: user.watched },
				})
				.then((res) => {
					console.log(res)
					setMovies(res.data)
				})
				.catch((err) => console.log(err))
		}
	}, [user])

	return (
		<div>
			<Container>
				<Button
					className="btn-block"
					size="lg"
					style={reviewButtonStyle}
					onClick={handleShow}
				>
					{" "}
					Write Review
				</Button>
			</Container>
			{movies.map((m) => (
				<MovieCard movie={m} />
			))}
			<ReviewModal
				user={user}
				addNewReview={addNewReview}
				movie={movie}
				setMovie={setMovie}
				show={show}
				handleClose={handleClose}
			/>
		</div>
	)
}
