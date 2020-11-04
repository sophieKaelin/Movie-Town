import React from "react"
import PosterCarousel from "./PosterCarousel.js"
import "bootstrap/dist/css/bootstrap.css"
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap"

const About = () => {
	return (
		<div>
			<Card>
				<Jumbotron fluid>
					<Container>
						<h1>About us</h1>
						<p>
							Welcome to our website, made for movie fanatics by
							movie fanatics. We made this website to connect and
							share with our friends our passion for movies.
						</p>
					</Container>
				</Jumbotron>
				<Row>
					<Col className="d-flex justify-content-center">
						<h2>Meet our Team</h2>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<PosterCarousel />
					</Col>
				</Row>
			</Card>
		</div>
	)
}

export default About
