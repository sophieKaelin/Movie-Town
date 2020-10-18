import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col } from "react-bootstrap"
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
	return (
		<Card className="mt-5" style={{ width: "56rem", margin: "auto auto" }}>
			<Row className="no-gutters">
				<Col className="col-4">
					<Card.Img
						className="col-auto img-fluid"
						src={avengersEndgame}
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
					</Card.Body>
				</Col>
			</Row>
			<Card.Footer className="text-muted">
				Movie added 18/10/20
			</Card.Footer>
		</Card>
	)
}

export default MovieCard
