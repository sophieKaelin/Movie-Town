import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Jumbotron, Image, Button, Container, Row, Col } from "react-bootstrap"
import "../style/Profile.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import MoviePoster from "./MoviePoster"

const Profile = ({ loggedInUser, followUser, unfollowUser }) => {
	//TODO: change this to relative path when pushed to heroku
	const userURL = "http://localhost:3001/api/users/"
	const [user, setUser] = useState({})
	const [movies, setMovies] = useState([])

	let { username } = useParams()
	useEffect(() => {
		axios.get(userURL + username).then((response) => {
			setUser(response.data)
			axios
				.get("http://localhost:3001/api/movies", {
					params: { id: response.data.watched },
				})
				.then((res) => {
					setMovies(res.data)
				})
				.catch((err) => console.log(err))
		})
	}, [])

	const followButtonFn = (username) => {
		console.log(username)
		console.log(user)
		// if (user.follows.includes(username)) {
		// 	//check user.follows, not sure if this is correct because of **no user*** stuff
		// 	unfollowUser(username)
		// } else {
		// 	followUser(username)
		// }
	}

	return (
		<div>
			<Jumbotron>
				<Image
					src={user.avatar}
					roundedCircle
					className="profileImage"
				/>
				<h3>{user.username}</h3>
				{user.username === loggedInUser.username ? (
					<Button variant="primary" className="editBtn">
						Edit
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-pen-fill ml-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
							/>
						</svg>
					</Button>
				) : (
					<Button
						variant="primary"
						className="followBtn"
						onClick={followButtonFn(user.username)}
					>
						Follow
					</Button>
				)}
			</Jumbotron>
			<Container>
				<Row>
					<Col className="myMoviesImages">
						<h3>My Movies</h3>
						{movies.map((m) => (
							<MoviePoster movie={m} />
						))}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Profile
