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
import MovieCard from "./components/MovieCard.js"
import ReviewCard from "./components/ReviewCard.js"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"

//TODO: Reroute to login page if there is no user logged in (set this on all pages)

//TODO: change this to relative path when pushed to heroku
const userURL = "http://localhost:3001/api/users/"

function App() {
	const [users, setUsers] = useState([]) //all users
	const [user, setUser] = useState("") //Logged In User
	const [reviews, setReviews] = useState([]) //all reviews

	const FsetUser = (user) => {
		setUser(user)
	}

	//TODO: Remove this because we shouldn't be using local storage
	useEffect(async () => {
		const localUser = JSON.parse(localStorage.getItem("user"))
		if (localUser) {
			await axios.get(userURL + localUser.username).then((response) => {
				setUser(response.data)
			})
		}
	}, [])

	console.log("APP USER: ", user)
	const addNewUser = (newUser) => {
		userServices.addNewUser(newUser).then((response) => {
			console.log(response)
			setUsers([...users, response.data])
		})
	}
	const followUser = (userToFollow, user) => {
		userServices.followUser.then((response) => {
			setUser(response.data)
			setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
		})
	}
	const unfollowUser = (userToFollow, user) => {
		userServices.unfollowUser.then((response) => {
			setUser(response.data)
			setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
		})
	}
	const addWatched = (titleid, user) => {
		userServices.addWatched.then((response) => {
			setUser(response.data)
			setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
		})
	}
	const addToWatch = (titleid, user) => {
		userServices.addToWatch.then((response) => {
			setUser(response.data)
			setUsers(users.map((u) => (u.id !== user.id ? u : response.data)))
		})
	}

	const addNewReview = (newReview) => {
		reviewServices.addNewReview.then((response) => {
			console.log(response)
			setReviews([...reviews, response.data])
		})
	}
	const deleteReview = (review) => {
		reviewServices.deleteReview.then((response) => {
			console.log("delete succeeded")
			const newReviews = reviews.filter((r) => r.id !== review.id)
			setReviews(newReviews)
		})
	}
	const likeReview = (review, user) => {
		reviewServices.likeReview.then((response) => {
			setReviews(
				reviews.map((r) => (r.id !== review.id ? r : response.data))
			)
		})
	}
	const unlikeReview = (review, user) => {
		reviewServices.unlikeReview.then((response) => {
			setReviews(
				reviews.map((r) => (r.id !== review.id ? r : response.data))
			)
		})
	}
	const addComment = (review, comment) => {
		reviewServices.addComment.then((response) => {
			setReviews(
				reviews.map((r) => (r.id !== review.id ? r : response.data))
			)
		})
	}
	const editStars = (stars, review) => {
		reviewServices.editStars.then((response) => {
			setReviews(
				reviews.map((r) => (r.id !== review.id ? r : response.data))
			)
		})
	}
	const editContent = (content, review) => {
		reviewServices.editContent.then((response) => {
			setReviews(
				reviews.map((r) => (r.id !== review.id ? r : response.data))
			)
		})
	}

	const baseURL = "/api/"

	useEffect(() => {
		axios.get(baseURL + "users").then((response) => {
			setUsers(response.data)
		})
	}, [])

	useEffect(() => {
		axios.get(baseURL + "reviews").then((response) => {
			setReviews(response.data)
		})
	}, [])

	return (
		<Router>
			<Switch>
				<Route path="/home">
					{user ? <Redirect to="/home" /> : <Redirect to="/login" />}
					<NavBar user={user} setUser={FsetUser} />
					<Home />
				</Route>
				<Route path="/login">
					<Login user={user} setUser={FsetUser} />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/myprofile">
					<NavBar user={user} setUser={FsetUser} />
					<Profile user={user} />
				</Route>
				<Route path="/profile/:username">
					<NavBar user={user} setUser={FsetUser} />
					{/* TODO: Fix this so it's not dodgy. If no user input, then check useParams. Had null check issues */}
					<Profile user="**NO_USER**" />
				</Route>
				<Route path="/myMovies">
					<NavBar />
					<MovieCard />
				</Route>
				<Route path="/reviews">
					<NavBar />
					<ReviewCard />
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
