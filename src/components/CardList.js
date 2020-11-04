import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Container, Form, Row, Col } from "react-bootstrap"
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
	const [watched, setWatched] = useState(true)

	const reviewButtonStyle = {
		marginTop: "50px",
		padding: "15px",
	}

	useEffect(() => {
		console.log(user)
		if (user) {
			console.log(user.watched)
			if (watched) {
				axios
					.get("http://localhost:3001/api/movies", {
						params: { id: user.watched },
					})
					.then((res) => {
						console.log(res)
						setMovies(res.data)
					})
					.catch((err) => console.log(err))
			} else {
				axios
					.get("http://localhost:3001/api/movies", {
						params: { id: user.toWatch },
					})
					.then((res) => {
						console.log(res)
						setMovies(res.data)
					})
					.catch((err) => console.log(err))
			}
		}
	}, [user, watched])

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
					<Form.Check
						type="switch"
						id="custom-switch"
						label="Show movies you want to watch"
						onClick={() => setWatched(!watched)}
					/>
					{movies.map((m) => {
						console.log(m)
						return <MovieCard movie={m} />
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
