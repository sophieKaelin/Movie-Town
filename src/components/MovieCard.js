import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col } from "react-bootstrap"
import tmnt from "../moviePosters/tmnt.png"

const MovieCard = () => {
	return (
		<Card style={{ width: "62rem" }}>
			<Row>
				<Col>
					<Card.Img
						className="col-auto img-fluid"
						src="//placehold.it/200"
					/>
				</Col>
				<Col>
					<Card.Title>Movie Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
				</Col>
			</Row>
		</Card>
	)
}

export default MovieCard
