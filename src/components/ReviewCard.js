import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
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
import axios from "axios"
import "../style/ReviewCard.css"

const ReviewCard = ({ reviews, user, loggedInUser, deleteFn }) => {
	const {
		username,
		titleid,
		timestamp,
		stars,
		content,
		likes,
		comments,
	} = reviews
	const [newComment, setNewComment] = useState("")
	const [like, setLike] = useState(false)
	// store state for star rating
	const [starRating, setStarRating] = useState()
	const [hover, setHover] = useState(null)
	const [movie, setMovie] = useState({
		Title: "",
		imdbID: "",
		Year: "",
		Plot: "",
		Poster: "",
	})
	useEffect(() => {
		if (user) {
			axios
				.get("http://localhost:3001/api/movie/id", {
					params: { id: titleid },
				})
				.then((res) => {
					setMovie(res.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [titleid, user])

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

	// TODO: send comments to back-end..below is old code just testing comments on the front-end
	const [commentsList, setCommentsList] = useState([
		{
			author: "Dwight Schrute",
			comment: "beetroots",
			timestamp: "28/10/20",
		},
	])

	const handleComment = () => {
		console.log(newComment)
		// TODO: Get comments working with back-end

		setCommentsList([
			...commentsList,
			{
				author: username,
				comment: newComment,
				timestamp: "28/10/20",
			},
		])
	}

	//*****TODO fix re-rendering after deleting a review*******
	const handleDelete = () => {
		deleteFn(reviews)
	}

	//@mentions and links to profiles
	const contentLinks = (content) => {
		var newContent = []
		while (content.indexOf("@") !== -1) {
			const firstIndex = content.indexOf("@")
			const str = content.substr(0, firstIndex)
			newContent.push(str)
			content = content.slice(firstIndex)
			const lastIndex = content.indexOf(" ")
			const name = content.substr(0, lastIndex)
			const nameURL = content.substr(1, lastIndex - 1)
			const newLink = <Link to={"/profile/" + nameURL}> {name} </Link>
			newContent.push(newLink)
			content = content.slice(lastIndex)
		}
		newContent.push(content)
		return newContent
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
							src={user.avatar}
							roundedCircle
						/>
						<b><Link to={"/profile/" + username}> {username} </Link></b> reviewed <b>{movie.Title}</b>
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
									<em>{""} Date Reviewed: </em> {timestamp}
								</p>
							</ListGroupItem>
							<ListGroupItem>{contentLinks(content)}</ListGroupItem>
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
											src={movie.Poster}
											alt={movie.Title + " poster"}
										/>
										<h3>
											{movie.Title} ({movie.Year})
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
												{movie.Plot}
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
					{reviews.username === loggedInUser.username 
							? (
								<Button
									variant="outline-secondary"
									onClick={handleDelete}
									>
								Delete
								</Button>
							) : null
					}
					<Accordion.Collapse eventKey="0">
						<ListGroup className="mt-2">
							{comments !== undefined ? comments.map((comment) => (
								<ListGroupItem className="mt-2">
									<Image
										style={{
											height: "50px",
											width: "50px",
										}}
										className="mr-3"
										alt="Avatar"
										src={user.avatar}
										roundedCircle
									/>
									<b>{comment.author}: </b>
									{comment.comment}
								</ListGroupItem>
							)) : null}
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
