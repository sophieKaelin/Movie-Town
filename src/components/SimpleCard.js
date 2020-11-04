import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import "../style/MovieCard.css"

const MovieCard = ({ movie }) => {
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
	// store state for star rating
	const [starRating, setStarRating] = useState(null)
	const [hover, setHover] = useState(null)

	return (
		<Card
			className="mt-5"
			style={{ maxWidth: "56rem", margin: "auto auto" }}
		>
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
							</ListGroupItem>
							<ListGroupItem>
								<Card.Text>
									{Rating} | {Runtime} | {Genre} | {Released}
								</Card.Text>
								<Card.Text>{Plot}</Card.Text>
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
