import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap"
import "../style/ReviewForm.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import blank from "../moviePosters/blankPoster.png"

const ReviewForm = ({ user, addNewReview, movie, setMovie, handleClose }) => {
	const history = useHistory()
	const [movieSearch, setMovieSearch] = useState("")
	const [hover, setHover] = useState(null)
	const [reviewInfo, setReviewInfo] = useState({
		username: "",
		titleid: movie.imdbID, //TODO: does this work?
		timestamp: Date.now(),
		stars: 0,
		content: "",
		likes: [],
		comments: [],
	})

	const getMovie = async (e) => {
		e.preventDefault()
		await axios
			.get("http://localhost:3001/api/movie/title", {
				params: { title: movieSearch },
			})
			.then((res) => {
				console.log(res.data)
				if (res.data.Error === "Movie not found!") {
					clearMovie()
				} else {
					setMovie(res.data)
					setReviewInfo({
						...reviewInfo,
						titleid: res.data.imdbID,
						username: user.username,
					})
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addNewReview(reviewInfo)
		history.push("/reviews")
		clearMovie()
		handleClose()
	}

	const clearMovie = () => {
		setMovieSearch("")
		setMovie("")
	}

	//** Code for the form **/

	//Rating Movie out of stars
	const stars = () => {
		return (
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
									setReviewInfo({
										...reviewInfo,
										stars: ratingValue,
									})
								}
							/>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-star-fill"
								fill={
									ratingValue <= (hover || reviewInfo.stars)
										? "#ffc107"
										: "#e4e5e9"
								}
								xmlns="http://www.w3.org/2000/svg"
								onMouseEnter={() => setHover(ratingValue)}
								onMouseLeave={() => setHover(null)}
							>
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
							</svg>
						</label>
					)
				})}
				<i className="text-muted ml-2">
					Your rating is: {reviewInfo.stars}
				</i>
			</div>
		)
	}
	console.log("revie: ", reviewInfo)
	return (
		<div>
			<Container className="align-items-center">
				<Card bg="light" className="reviewCard">
					<Card.Body>
						<Row className="d-flex justify-content-center">
							<Col sm={6} className="align-items-center">
								<Card.Title className="text-center">
									<h1>Write Review</h1>
								</Card.Title>
							</Col>
						</Row>
						<Row>
							<Col sm={4}>
								{movie ? (
									<Card.Img
										className="col-auto img-fluid"
										src={movie.Poster}
										alt={movie.title}
									/>
								) : (
									<Card.Img
										className="col-auto img-fluid"
										//TODO: EDIT POSTER INPUT -> make it greyed out, or some other default
										src={blank}
										alt="No Movie"
									/>
								)}
							</Col>
							<Col sm={8}>
								<Form>
									{!movie ? (
										<Form.Group>
											<Form inline>
												<Form.Label>Movie: </Form.Label>
												<Form.Control
													placeholder="Movie Title"
													onChange={(e) =>
														setMovieSearch(
															e.target.value
														)
													}
												/>
												<Button
													disabled={!movieSearch}
													className="movie-button"
													variant="primary"
													type="submit"
													onClick={getMovie}
												>
													Search
												</Button>
											</Form>
											{!movieSearch ? (
												<Form.Text className="error text-danger">
													Please Enter a REAL Movie
													Title
												</Form.Text>
											) : (
												<br></br>
											)}
										</Form.Group>
									) : (
										<div>
											<Form.Group>
												<Form.Label>Movie: </Form.Label>
												<h3 className="error text-primary">
													{movie.Title}
												</h3>
												<Form.Text
													//TODO: On click, this text should  clear the movie field clearMovie()
													className="text-danger"
												>
													<i>
														<a
															id="notYourMovie"
															onClick={clearMovie}
														>
															Not the movie you
															were looking for?
															Click here.
														</a>
													</i>
												</Form.Text>
											</Form.Group>
											<Form.Group>
												{stars()}
												<Form.Label>
													Review:{" "}
												</Form.Label>
												<Form.Control
													as="textarea"
													rows={5}
													onChange={(e) =>
														setReviewInfo({
															...reviewInfo,
															content:
																e.target.value,
														})
													}
												/>
											</Form.Group>
											<Button
												disabled={!reviewInfo.content}
												variant="primary"
												type="submit"
												className="btn-block"
												onClick={handleSubmit}
											>
												Post
											</Button>
										</div>
									)}
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	)
}

export default ReviewForm
