import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import "../style/MovieCard.css"

import MovieCard from "./MovieCard"

export const CardList = (props) => {
	const movie = {
		title: "Avengers Endgame",
		year: "2019",
		rating: "M",
		runtime: "3h 1min",
		genre: "Action, Adventure, Drama",
		releaseDate: "24 April 2019 (Australia)",
		synopsis:
			"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
		directors: "Anthony Russo, Joe Russo",
		writers:
			"Christopher Markus (screenplay by), Stephen McFeely (screenplay by) ...",
		cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo ...",
		link: "https://www.imdb.com/title/tt4154796/",
		poster:
			"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
	}

	return <MovieCard movie={movie} />
}
