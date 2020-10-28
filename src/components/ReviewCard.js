import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {
	Card,
	Row,
	Col,
	Button,
	ListGroup,
	ListGroupItem,
	InputGroup,
	FormControl,
	Image,
} from "react-bootstrap"
import "../style/ReviewCard.css"
import samProfile from "../profilepictures/samProf.png"

const ReviewCard = ({ props }) => {
	console.log("props ", props)
	const username = "b_radkenny"
	const titleid = "tt0317219"
	const timestamp = "2020-07-15 07:25:28"
	const stars = 5
	const content = "Broom Broom, I like Cards"
	const likes = ["b_radkenny", "george_summerglue"]
	const comments = []

	// const {
	// 	username,
	// 	titleid,
	// 	timestamp,
	// 	starts,
	// 	content,
	// 	likes,
	// 	comments
	// } = reviews

	// store state for star rating
	const [starRating, setStarRating] = useState()
	const [hover, setHover] = useState(null)

	// review data
	const user = "Professor Sam"
	const title = "Avengers Endgame"
	const watchDate = "21/10/20"
	const year = "2019"
	const synopsis =
		"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
	const link = "https://www.imdb.com/title/tt4154796/"
	const poster =
		"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
	const avatar = samProfile
	return (
		<Card className="mt-5" style={{ width: "56rem", margin: "auto auto" }}>
			<Row className="no-gutters">
				<Col>
					<Card.Header>
						<Image
							style={{
								height: "50px",
								width: "50px",
							}}
							className="mr-3"
							alt="Avatar"
							src={avatar}
							roundedCircle
						/>
						<b>{user}</b> reviewed <b>{title}</b>
					</Card.Header>
					<Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>
								<div className="rating">
									<i className="text-muted mr-2">
										{user} rating:
									</i>
									{[...Array(5)].map((star, i) => {
										const ratingValue = i + 1

										return (
											<label>
												<svg
													width="1em"
													height="1em"
													viewBox="0 0 16 16"
													className="bi bi-star-fill"
													fill={
														ratingValue <=
														(hover || stars)
															? "#ffc107"
															: "#e4e5e9"
													}
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
												</svg>
											</label>
										)
									})}
									<em className="float-right text-muted">
										{""} Date Watched: {watchDate}
									</em>
								</div>
							</ListGroupItem>
							<ListGroupItem>
								<p>{content}</p>
							</ListGroupItem>
						</ListGroup>
						<Card
							style={{
								maxWidth: "42rem",
								margin: "auto auto",
							}}
						>
							<Row>
								<Col>
									<Card.Body>
										<Card.Img
											className="moviePoster col-auto img-fluid"
											src={poster}
											alt={title + " poster"}
										/>
										<h3>
											{title} ({year})
										</h3>
										<ListGroup className="list-group-flush">
											<ListGroupItem>
												<Button>Add to list</Button>
											</ListGroupItem>
											<ListGroupItem>
												{synopsis}
											</ListGroupItem>
										</ListGroup>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Card.Body>
				</Col>
			</Row>

			<Card.Footer>
				<Card.Link>Like</Card.Link>
				<Card.Link>View Comments</Card.Link>
				<ListGroup className="mt-2">
					<ListGroupItem>
						<Image
							style={{
								height: "50px",
								width: "50px",
							}}
							className="mr-3"
							alt="Avatar"
							src={avatar}
							roundedCircle
						/>
						<b>AnonymousAdmirer: </b>Woww i can comment on your
						review, this website is bananas
					</ListGroupItem>
				</ListGroup>
				<InputGroup className="mb-3 mt-3">
					<FormControl placeholder="Write comment" />
					<InputGroup.Append>
						<Button variant="outline-secondary">Comment</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Footer>
		</Card>
	)
}

export default ReviewCard
