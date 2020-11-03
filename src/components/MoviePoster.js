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
		Rating,
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
					<ListGroup>
						<ListGroupItem>
							<Card.Text>
								{Rating} | {Runtime} | {Genre} | {Released}
							</Card.Text>
							<Card.Text>{Plot}</Card.Text>
						</ListGroupItem>
						<ListGroupItem>
							<h6>Directors:</h6> {Director}
						</ListGroupItem>
						<ListGroupItem>
							<h6>Writers:</h6> {Writer}
						</ListGroupItem>
						<ListGroupItem>
							<h6>Cast:</h6> {Actors}
						</ListGroupItem>
					</ListGroup>
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
