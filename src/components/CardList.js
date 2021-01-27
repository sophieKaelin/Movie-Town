import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Container, Row, Col } from "react-bootstrap"
import "../style/MovieCard.css"

import MovieCard from "./MovieCard"
import axios from "axios"

export const CardList = ({ user }) => {
	const [movies, setMovies] = useState([])
	const [watched, setWatched] = useState(true)

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
				</Col>
				<Col xs={2}></Col>
			</Row>
		</Container>
	)
}
