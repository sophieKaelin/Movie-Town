import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import "../style/MovieCard.css"
import avengersEndgame from "../moviePosters/avengersEndgame.jpg"

const MovieCard = () => {
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
	return (
		<Card className="mt-5" style={{ width: "56rem", margin: "auto auto" }}>
			<Row className="no-gutters">
				<Col className="col-4" style={{ margin: "auto" }}>
					<Card.Img
						className="col-auto img-fluid"
						src={avengersEndgame}
						alt={title + " poster"}
					/>
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>
							<h3>
								{title}, {year}
							</h3>
						</Card.Title>
						<Card.Text>
							{rating} | {runtime} | {genre} | {releaseDate}
						</Card.Text>
						<Card.Text>{synopsis}</Card.Text>
						<ListGroup className="list-group-flush">
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
