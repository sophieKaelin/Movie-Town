import React, { useState, useEffect } from "react"
import "./style/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import userServices from "./axiosServices/userServices"
import reviewServices from "./axiosServices/reviewServices"
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import NavBar from "./components/NavBar.js"
import Profile from "./components/Profile.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import { CardList } from "./components/CardList.js"
import ReviewCardList from "./components/ReviewCardList.js"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"
import MovieCard from "./components/MovieCard"

//TODO: Reroute to login page if there is no user logged in (set this on all pages)

//TODO: change this to relative path when pushed to heroku
const userURL = "http://localhost:3001/api/users/"

function App() {
	const [users, setUsers] = useState([]) //all users
	const [user, setUser] = useState("") //Logged In User
	const [reviews, setReviews] = useState([]) //all reviews
	const [movie, setMovie] = useState("") //movie currently being searched

	//REVIEW MODAL STATE VARIABLES & FUNCTIONS
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const FsetUser = (user) => {
		setUser(user)
	}

	const FsetUsers = (users) => {
		setUsers(users)
	}

	const FsetMovie = (movie) => {
		setMovie(movie)
	}

	//TODO: Remove this because we shouldn't be using local storage
	useEffect(() => {
		const localUser = JSON.parse(localStorage.getItem("user"))

		if (localUser) {
			axios.get(userURL + localUser.username).then((response) => {
				setUser(response.data)
			})
		}

		axios.get("http://localhost:3001/api/users").then((response) => {
			setUsers(response.data)
		})

		axios.get("http://localhost:3001/api/reviews").then((response) => {
			setReviews(response.data)
		})
	}, [])

	const addNewUser = (newUser) => {
		userServices.addNewUser(newUser, users, setUsers)
	}
	const followUser = (userToFollow, user) => {
		userServices.followUser(userToFollow, user, users, setUser, setUsers)
	}
	const unfollowUser = (userToFollow, user) => {
		userServices.unfollowUser(userToFollow, user, users, setUser, setUsers)
	}

	const addNewReview = (newReview) => {
		reviewServices.addNewReview(newReview, reviews, setReviews)
	}
	const deleteReview = (review) => {
		reviewServices.deleteReview(review, reviews, setReviews)
	}
	const likeReview = (review) => {
		reviewServices.likeReview(review, user, reviews, setReviews)
	}
	const unlikeReview = (review) => {
		reviewServices.unlikeReview(review, user, reviews, setReviews)
	}
	const addComment = (review, comment) => {
		reviewServices.addComment(review, comment, reviews, setReviews)
	}
	const editStars = (stars, review) => {
		reviewServices.editStars(stars, review, reviews, setReviews)
	}
	const editContent = (content, review) => {
		reviewServices.editContent(content, review, reviews, setReviews)
	}

	const baseURL = "/api/"
	//Not working, response with 404 not found hence hardcoded url in useEffects

	return (
		<div>
			<Router>
				<Switch>
					<Route path="/login">
						<Login user={user} setUser={FsetUser} />
					</Route>
					<Route path="/register">
						<Register
							users={users}
							setUser={FsetUser}
							addNewUser={addNewUser}
						/>
					</Route>
				</Switch>
			</Router>
			<Router>
				{user ? (
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
						addNewReview={addNewReview}
						show={show}
						handleClose={handleClose}
						handleShow={handleShow}
					/>
				) : (
					<br></br>
				)}
				<Switch>
					<Route path="/home">
						{user ? (
							<Redirect to="/home" />
						) : (
							<Redirect to="/login" />
						)}
						<Home />
					</Route>
					<Route path="/profile/:username">
						<Profile
							loggedInUser={user}
							followUser={followUser}
							unfollowUser={unfollowUser}
						/>
					</Route>
					<Route path="/my/movies">
						<CardList
							user={user}
							setUser={FsetUser}
							movie={movie}
							setMovie={FsetMovie}
							addNewReview={addNewReview}
							show={show}
							handleClose={handleClose}
							handleShow={handleShow}
							users={users}
							setUser={setUser}
							setUsers={setUsers}
						/>
					</Route>
					<Route path="/reviews">
						<ReviewCardList
							user={user}
							setUser={FsetUser}
							movie={movie}
							setMovie={FsetMovie}
							addNewReview={addNewReview}
							show={show}
							handleClose={handleClose}
							handleShow={handleShow}
							users={users}
							setUser={setUser}
							setUsers={setUsers}
						/>
					</Route>
					<Route path="/movie/:id">
						<MovieCard
							movie={movie}
							user={user}
							addNewReview={addNewReview}
							setMovie={setMovie}
							show={show}
							handleShow={handleShow}
							handleClose={handleClose}
							watched={null}
							users={users}
							setUser={FsetUser}
							setUsers={FsetUsers}
						/>
					</Route>
					<Route path="/about">
						<About />
					</Route>
					{/* ALWAYS LEAVE LAST */}
					<Route path="/">
						{user ? (
							<Redirect to="/home" />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
