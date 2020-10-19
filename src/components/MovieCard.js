import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import "../style/MovieCard.css"

const MovieCard = () => {
	// store state for star rating
	const [starRating, setStarRating] = useState(null)
	const [hover, setHover] = useState(null)

	// movie data
	const title = "Avengers Endgame"
	const year = "2019"
	const rating = "M"
	const runtime = "3h 1min"
	const genre = "Action, Adventure, Drama"
	const releaseDate = "24 April 2019 (Australia)"
	const synopsis =
		"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
	const directors = "Anthony Russo, Joe Russo"
	const writers =
		"Christopher Markus (screenplay by), Stephen McFeely (screenplay by) ..."
	const cast = "Robert Downey Jr., Chris Evans, Mark Ruffalo ..."
	const link = "https://www.imdb.com/title/tt4154796/"
	const poster =
		"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"

	return (
		<Card className="mt-5" style={{ width: "56rem", margin: "auto auto" }}>
			<Row className="no-gutters">
				<Col>
					<Card.Header>
						{title} ({year})
					</Card.Header>
					<Card.Body>
						<Card.Img
							className="col-auto img-fluid"
							src={poster}
							alt={title + " poster"}
						/>
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
												setStarRating(ratingValue)
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
											onMouseLeave={() => setHover(null)}
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

						<ListGroup className="list-group-flush">
							<ListGroupItem>
								<Card.Text>
									{rating} | {runtime} | {genre} |{" "}
									{releaseDate}
								</Card.Text>
								<Card.Text>{synopsis}</Card.Text>
							</ListGroupItem>
							<ListGroupItem>
								<h6>Directors:</h6> {directors}
							</ListGroupItem>
							<ListGroupItem>
								<h6>Writers:</h6> {writers}
							</ListGroupItem>
							<ListGroupItem>
								<h6>Cast:</h6> {cast}
							</ListGroupItem>
						</ListGroup>
					</Card.Body>
				</Col>
			</Row>
			<Card.Footer>
				<Card.Link href={link}>See more information at IMDb</Card.Link>
			</Card.Footer>
		</Card>
	)
}

export default MovieCard
