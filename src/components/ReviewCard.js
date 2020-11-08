import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
	Popover,
	OverlayTrigger,
} from "react-bootstrap"
import axios from "axios"
import "../style/ReviewCard.css"
import reviewServices from "../axiosServices/reviewServices.js"
import userServices from "../axiosServices/userServices"

const ReviewCard = ({
	review,
	user,
	reviews,
	setReviews,
	users,
	setUser,
	setUsers,
	loggedInUser,
	deleteFn,
}) => {
	const {
		username,
		titleid,
		timestamp,
		stars,
		content,
		likes,
		comments,
	} = review
	const [newComment, setNewComment] = useState("")
	const [like, setLike] = useState(false)
	// store state for star rating
	const [starRating, setStarRating] = useState()
	const [hover, setHover] = useState(null)
	const [reviewUser, setReviewUser] = useState(user)
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
				.get("/api/movie/id", {
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

	useEffect(() => {
		axios
			.get("/api/users/" + username)
			.then((response) => {
				setReviewUser(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setNewComment(value)
	}

	const handleLike = () => {
		reviewServices.likeReview(review, user, reviews, setReviews)
	}

	const handleUnlike = () => {
		reviewServices.unlikeReview(review, user, reviews, setReviews)
	}

	const handleAddToList = () => {
		userServices.addToWatch(titleid, user, users, setUser, setUsers)
		alert(movie.Title + " has been added to your to watch list")
	}

	const handleComment = () => {
		reviewServices.addComment(review, newComment, reviews, setReviews)
	}

	//*****TODO fix re-rendering after deleting a review*******
	const handleDelete = () => {
		reviewServices.deleteReview(review, reviews, setReviews)
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

	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">Likes</Popover.Title>
			<Popover.Content>
				{likes.length > 0 ? likes : "Be the first to like this review!"}
			</Popover.Content>
		</Popover>
	)

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
							src={reviewUser.avatar}
							roundedCircle
						/>
						<b>
							<Link to={"/profile/" + username}>
								{" "}
								{username}{" "}
							</Link>
						</b>{" "}
						reviewed <b>{movie.Title}</b>
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
							<ListGroupItem>
								{contentLinks(content)}
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
					<OverlayTrigger
						trigger={["hover", "focus"]}
						placement="right"
						overlay={popover}
					>
						{review.likes.includes(user.username) ? (
							<Card.Link onClick={handleUnlike}>Unlike</Card.Link>
						) : (
							<Card.Link onClick={handleLike}>Like</Card.Link>
						)}
					</OverlayTrigger>
					<Accordion.Toggle as={Card.Link} eventKey="0">
						View/Hide Comments
					</Accordion.Toggle>
					{reviews ? (
						review.username === loggedInUser.username ? (
							<Button
								variant="outline-secondary"
								onClick={handleDelete}
								className="ml-3"
							>
								Delete
							</Button>
						) : null
					) : null}
					<Accordion.Collapse eventKey="0">
						<ListGroup className="mt-2">
							{comments !== null
								? comments.map((comment) => (
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
											<b>{user.username}: </b>
											{comment}
										</ListGroupItem>
								  ))
								: null}
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
