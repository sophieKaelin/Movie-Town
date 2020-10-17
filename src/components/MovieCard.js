import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col } from "react-bootstrap"

const MovieCard = () => {
	return (
		<Card className="mt-5" style={{ width: "56rem", margin: "auto auto" }}>
			<Row className="no-gutters">
				<Col className="col-4">
					<Card.Img
						className="col-auto img-fluid"
						src="//placehold.it/200"
					/>
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>
							<h3>Movie Title</h3>
						</Card.Title>
						<Card.Text>
							RATING | RUNTIME | GENRE | RELEASE DATE
						</Card.Text>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
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
