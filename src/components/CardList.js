import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import "../style/MovieCard.css"

import MovieCard from "./MovieCard"
import axios from "axios"

export const CardList = ({ user }) => {
	const [movies, setMovies] = useState([])

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

	return movies.map((m) => <MovieCard movie={m} />)
}
