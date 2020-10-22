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
	const [user, setUser] = useState(null) //Logged In User
	const [reviews, setReviews] = useState([]) //all reviews

	const FsetUser = (user) => {
		setUser(user)
    }

	//TODO: Remove this because we shouldn't be using local storage
	useEffect(() => {
		const localUser = JSON.parse(localStorage.getItem("user"))
		if (localUser) {
			axios.get(userURL + localUser.username).then((response) => {
				setUser(response.data)
			})
		}
	}, [])
    
    userServices.addNewUser(newUser)
        .then((response) => {
            console.log(response)
            setUsers([...users, response.data])
        })
    userServices.followUser
        .then(response => {
            setUser(response.data)
            setUsers(allUsers.map(u => u.id !== user.id ? u : response.data))
        })
    userServices.unfollowUser
        .then(response => {
            setUser(response.data)
            setUsers(allUsers.map(u => u.id !== user.id ? u : response.data))
        })
    userServices.addWatched
        .then(response => {
            setUser(response.data)
            setUsers(allUsers.map(u => u.id !== user.id ? u : response.data))
        })
    userServices.addToWatch
        .then(response => {
            setUser(response.data)
            setUsers(allUsers.map(u => u.id !== user.id ? u : response.data))
        })

    reviewServices.addNewReview
        .then((response) => {
            console.log(response)
            setReviews([...reviews, response.data])
        })
    reviewServices.deleteReview
        .then((response) => {
            console.log("delete succeeded")
            const newReviews = reviews.filter((r) => r.id !== review.id)
            setReviews(newReviews)
        })
    reviewServices.likeReview
        .then(response => {
            setReviews(reviews.map(r => r.id !== review.id ? r : response.data))
        })
    reviewServices.unlikeReview
        .then(response => {
            setReviews(reviews.map(r => r.id !== review.id ? r : response.data))
        })
    reviewServices.addComment
        .then(response => {
            setReviews(reviews.map(r => r.id !== review.id ? r : response.data))
        })
    reviewServices.editStars
        .then(response => {
            setReviews(reviews.map(r => r.id !== review.id ? r : response.data))
        })
    reviewServices.editContent
        .then(response => {
            setReviews(reviews.map(r => r.id !== review.id ? r : response.data))
        })
    
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
				<Route path="/profile">
					<NavBar user={user} setUser={FsetUser} />
					<Profile />
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
