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
	Accordion,
} from "react-bootstrap"
import "../style/ReviewCard.css"
import samProfile from "../profilepictures/samProf.png"

const ReviewCard = ({ reviews, user }) => {
	console.log("reviews", reviews)
	const {
		username,
		titleid,
		timestamp,
		starts,
		content,
		likes,
		comments,
	} = reviews
	const [newComment, setNewComment] = useState("")
	const [like, setLike] = useState(false)
	// const [comments, setComments] = useState([
	// 	{
	// 		author: "Dwight Schrute",
	// 		comment: "beetroots",
	// 		timestamp: "28/10/20",
	// 	},
	// ])

	// store state for star rating
	const [starRating, setStarRating] = useState()
	const [hover, setHover] = useState(null)

	// review data
	// const user = "Professor Sam"
	const title = "Avengers Endgame"
	const watchDate = "21/10/20"
	const year = "2019"
	const synopsis =
		"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
	const link = "https://www.imdb.com/title/tt4154796/"
	const poster =
		"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
	const avatar = samProfile
	const stars = 5
	// const content = "Broom Broom, I like Cards"

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setNewComment(value)
	}

	const handleLike = () => {
		if (!like) {
			setLike(true)
		} else {
			setLike(false)
		}
	}

	const handleAddToList = () => {
		alert("TODO: Movie added to your movie list")
	}

	const handleComment = () => {
		console.log(newComment)
		// setComments([
		// 	...comments,
		// 	{
		// 		author: "Dwight Schrute",
		// 		comment: newComment,
		// 		timestamp: "28/10/20",
		// 	},
		// ])
	}
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
						<b>{username}</b> reviewed <b>{title}</b>
					</Card.Header>
					<Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem
								style={{
									padding: "0",
									margin: "0",
								}}
							>
								<em className="text-muted ml-3 mr-2">
									Rating:
								</em>
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
								<p className="text-muted ml-3">
									<em>{""} Date Watched: </em> {watchDate}
								</p>
							</ListGroupItem>
							<ListGroupItem>{content}</ListGroupItem>
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
												<Button
													onClick={handleAddToList}
												>
													Add to list
												</Button>
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
				<Accordion>
					<Card.Link onClick={handleLike}>
						{like ? "Unlike" : "Like"}
					</Card.Link>
					<Accordion.Toggle as={Card.Link} eventKey="0">
						View/Hide Comments
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<ListGroup className="mt-2">
							{/* {comments.map((comment) => (
								<ListGroupItem className="mt-2">
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
									<b>{comment.author}: </b>
									{comment.comment}
								</ListGroupItem>
							))} */}
						</ListGroup>
					</Accordion.Collapse>
				</Accordion>
				<InputGroup className="mb-3 mt-3">
					<FormControl
						placeholder="Write comment"
						onChange={handleChange}
					/>
					<InputGroup.Append>
						<Button
							variant="outline-secondary"
							onClick={handleComment}
						>
							Comment
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Footer>
		</Card>
	)
}

export default ReviewCard
