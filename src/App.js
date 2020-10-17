import React, { useState, useEffect } from "react";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import PosterCarousel from "./components/PosterCarousel.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import NavBar from "./components/NavBar.js";
import Profile from "./components/Profile.js";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {

    const [users, setUsers] = useState([]) //all users
    const [reviews, setReviews] = useState([]) //all reviews

    const baseURL = "/api/"

    const addNewReview = (newReview) => {
        axios.post(baseURL + "reviews", newReview)
          .then(response => {
            console.log(response)
            setReviews([...reviews, response.data])
          })
    }

    const deleteReview = (review) => {
        console.log("delete", review)
        axios.delete(baseURL + "reviews/" + review.id)
            .then((response) => {
            console.log("delete succeeded")
            const newReviews = reviews.filter(r => r.id !== review.id)
            setReviews(newReviews)
        })
    }

    const addNewUser = (newUser) => {
        axios.post(baseURL + "users", newUser)
            .then(response => {
            console.log(response)
            setUsers([...users, response.data])
        })
    }

    useEffect(() => {
        axios.get(baseURL + "users")
        .then((response) => {
            setUsers(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get(baseURL + "reviews")
        .then((response) => {
            setReviews(response.data)
        })
    }, [])

	return (
		<Router>
			<Switch>
				<Route path="/home">
					<NavBar />
					<PosterCarousel />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/profile">
					<NavBar />
					<Profile />
				</Route>
				{/* ALWAYS LEAVE LAST */}
				<Route path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
