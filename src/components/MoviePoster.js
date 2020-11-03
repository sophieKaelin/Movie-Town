import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {
	Card,
	ListGroup,
	ListGroupItem,
	Modal,
	Button,
	Image,
} from "react-bootstrap"
import "../style/MovieCard.css"
import "../style/MoviePoster.css"

const MoviePoster = ({ movie }) => {
	const {
		Title,
		Year,
		imdbRating,
		Runtime,
		Genre,
		Released,
		Plot,
		Director,
		Writer,
		Actors,
		Poster,
	} = movie

	const Link = "https://www.imdb.com/title/" + movie.imdbID
	const [showModal, setShowModal] = useState(false)

	const handleClose = () => setShowModal(false)
	const handleShow = () => setShowModal(true)

	return (
		<>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						{Title} ({Year})
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card.Text>
						{imdbRating}/10 | {Runtime} | {Genre} | {Released}
					</Card.Text>
					<hr />
					<Card.Text>{Plot}</Card.Text>
					<hr />
					<h6>Directors:</h6> {Director}
					<hr />
					<h6>Writers:</h6> {Writer}
					<hr />
					<h6>Cast:</h6> {Actors}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<Image
				className="col-auto img-fluid moviePosterImage"
				src={Poster}
				alt={Title + " poster"}
				onClick={handleShow}
			/>
		</>
	)
}

export default MoviePoster
