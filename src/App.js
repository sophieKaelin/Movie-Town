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
import { CardList } from "./components/CardList.js"
import ReviewCard from "./components/ReviewCard.js"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"
import MovieCard from "./components/MovieCard"
import ReviewForm from "./components/ReviewForm"

//TODO: Reroute to login page if there is no user logged in (set this on all pages)

//TODO: change this to relative path when pushed to heroku
const userURL = "http://localhost:3001/api/users/"

function App() {
	const [users, setUsers] = useState([]) //all users
	const [user, setUser] = useState("") //Logged In User
	const [reviews, setReviews] = useState([]) //all reviews
	const [movie, setMovie] = useState("") //movie currently being searched

	const FsetUser = (user) => {
		setUser(user)
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
	const followUser = (userToFollow) => {
		//pass a user to the function or grab state variable user???
		userServices.followUser(userToFollow, user, users, setUser, setUsers)
	}
	const unfollowUser = (userToFollow) => {
		//pass a user to the function or grab state variable user???
		userServices.unfollowUser(userToFollow, user, users, setUser, setUsers)
	}
	const addWatched = (titleid) => {
		//pass a user to the function or grab state variable user???
		userServices.addWatched(titleid, user, users, setUser, setUsers)
	}
	const addToWatch = (titleid) => {
		//pass a user to the function or grab state variable user???
		userServices.addToWatch(titleid, user, users, setUser, setUsers)
	}

	const addNewReview = (newReview) => {
		reviewServices.addNewReview(newReview, reviews, setReviews)
	}
	const deleteReview = (review) => {
		reviewServices.deleteReview(review, reviews, setReviews)
	}
	const likeReview = (review) => {
		//pass a user to the function or grab state variable user???
		reviewServices.likeReview(review, user, reviews, setReviews)
	}
	const unlikeReview = (review) => {
		//pass a user to the function or grab state variable user???
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
		<Router>
			<Switch>
				<Route path="/home">
					{user ? <Redirect to="/home" /> : <Redirect to="/login" />}
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
					/>
					<Home />
				</Route>
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
				<Route path="/profile/:username">
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
					/>
					{/* TODO: Fix this so it's not dodgy. If no user input, then check useParams. Had null check issues */}
					<Profile
						loggedInUser={user}
						followUser={followUser}
						unfollowUser={unfollowUser}
					/>
				</Route>
				<Route path="/my/movies">
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
					/>
					<CardList user={user} />
				</Route>
				<Route path="/reviews">
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
					/>
					<ReviewCard user={user} />
				</Route>
				<Route path="/movie/:id">
					<NavBar
						user={user}
						setUser={FsetUser}
						movie={movie}
						setMovie={FsetMovie}
					/>
					<MovieCard movie={movie} />
				</Route>
				{/* ALWAYS LEAVE LAST */}
				<Route path="/">
					{user ? <Redirect to="/home" /> : <Redirect to="/login" />}
				</Route>
			</Switch>
		</Router>
	)
}

export default App
