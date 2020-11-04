import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {
	Card,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Button,
	DropdownButton,
	Dropdown,
} from "react-bootstrap"
import "../style/MovieCard.css"
import ReviewModal from "./ReviewModal.js"
import userServices from "../axiosServices/userServices"

const MovieCard = ({
	movie,
	user,
	addNewReview,
	setMovie,
	show,
	handleShow,
	handleClose,
	watched,
	users,
	setUser,
	setUsers,
}) => {
	const {
		Title,
		imdbID,
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
	// store state for star rating
	//TODO: Change this so that it reflects your current rating, if you want to change, you can edit in the form
	const [starRating, setStarRating] = useState(null)
	const [hover, setHover] = useState(null)
	const [status, setStatus] = useState(null)

	useEffect(() => {
		if (watched === null) {
			if (user.watched.includes(imdbID)) {
				setStatus("Watched")
			} else if (user.toWatch.includes(imdbID)) {
				setStatus("To Watch")
			} else {
				setStatus("Add to: ")
			}
		} else {
			console.log("I'm here")
			if (watched) {
				setStatus("Watched")
			} else {
				setStatus("To Watch")
			}
		}
	}, [status, watched, movie])

	const addToToWatch = () => {
		if (status === "Watched") {
			//REMOVE from watched -> TODO: Need an axios to do this.
		}
		userServices.addToWatch(imdbID, user, users, setUser, setUsers)
		setStatus("To Watched")
		//TODO: Rerender the screen when a movie is added to the list
	}
	const addToWatched = () => {
		if (status === "To Watch") {
			//REMOVE FROM TO WATCH -> TODO: Need an axios to do this.
		}
		userServices.addWatched(imdbID, user, users, setUser, setUsers)
		setStatus("Watched")
		//TODO: Rerender the screen when a movie is added to the list
	}

	return (
		<Card style={{ maxWidth: "56rem", marginBottom: "25px" }}>
			<Row className="no-gutters">
				<Col>
					<Card.Header>
						{Title} ({Year})
					</Card.Header>
					<Card.Body>
						<Card.Img
							className="col-auto img-fluid"
							src={Poster}
							alt={Title + " poster"}
						/>

						<ListGroup className="list-group-flush">
							<ListGroupItem>
								<div className="rating">
									{[...Array(5)].map((star, i) => {
										const ratingValue = i + 1

										return (
											<label>
												<input
													type="radio"
													name="rating"
													value={ratingValue}
													onClick={() =>
														setStarRating(
															ratingValue
														)
													}
												/>
												<svg
													width="1em"
													height="1em"
													viewBox="0 0 16 16"
													className="bi bi-star-fill"
													fill={
														ratingValue <=
														(hover || starRating)
															? "#ffc107"
															: "#e4e5e9"
													}
													xmlns="http://www.w3.org/2000/svg"
													onMouseEnter={() =>
														setHover(ratingValue)
													}
													onMouseLeave={() =>
														setHover(null)
													}
												>
													<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
												</svg>
											</label>
										)
									})}
									<i className="text-muted ml-2">
										Your rating is: {starRating}
									</i>
								</div>
								<DropdownButton
									id="dropdown-basic-button"
									// Alternate between title "Add to: ", "WATCHED", and "TO WATCH"
									title={status}
								>
									<Dropdown.Item onClick={addToWatched}>
										Watched
									</Dropdown.Item>
									<Dropdown.Item onClick={addToToWatch}>
										To Watch
									</Dropdown.Item>
								</DropdownButton>
								<Button onClick={handleShow}>Review</Button>

								<ReviewModal
									user={user}
									addNewReview={addNewReview}
									movie={movie}
									setMovie={setMovie}
									show={show}
									handleClose={handleClose}
								/>
							</ListGroupItem>
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
					</Card.Body>
				</Col>
			</Row>
			<Card.Footer>
				<Card.Link href={Link}>See more information at IMDb</Card.Link>
			</Card.Footer>
		</Card>
	)
}

export default MovieCard
