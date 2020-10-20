import React, { useState } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap"
import "../style/Login.css"
import { Redirect } from "react-router-dom"

//TODO: change this to relative path when pushed to heroku
const loginURL = "http://localhost:3001/api/login"

const validateForm = (errors) => {
	let valid = true
	Object.values(errors).forEach(
		// if we have an error string set valid to false
		(val) => val.length > 0 && (valid = false)
	)
	return valid
}

const Login = ({ user, setUser }) => {
	const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
	const [errors, setErrors] = useState({ username: "", password: "" })

	const login = () => {
		return axios.post(loginURL, loginInfo).then((response) => response.data)
	}

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target

		switch (name) {
			case "username":
				if (value.length < 4) {
					setErrors({
						...errors,
						username:
							"Username must be at least 4 characters long!",
					})
					setLoginInfo({ ...loginInfo, username: "" })
				} else {
					setErrors({
						...errors,
						username: "",
					})
					setLoginInfo({ ...loginInfo, username: value })
				}
				break

			case "password":
				if (value.length < 2) {
					setErrors({
						...errors,
						password:
							"Password must be at least 2 characters long!",
					})
					setLoginInfo({ ...loginInfo, password: "" })
				} else {
					setErrors({
						...errors,
						password: "",
					})
					setLoginInfo({ ...loginInfo, password: value })
				}
				break

			default:
				break
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validateForm(errors)) {
			console.info("Valid Form")
			login()
				.then((data) => {
					setUser(data.username)
					//TODO: Don't set things in local storage, that's naughty. We should hash the login.
					localStorage.setItem("user", JSON.stringify(data))
				})
				.catch((error) => {
					console.log("Error:", error)
				})
		} else {
			console.error("Invalid Form")
		}

		// Logging
		console.log("Submit username: ", loginInfo.username)
		console.log("Submit password: ", loginInfo.password)
	}
	if (user) {
		return <Redirect to="/" />
	} else
		return (
			<div id="loginBackground">
				<Container>
					<Row className="d-flex justify-content-center">
						<Col sm={4} className="align-items-center">
							<Card bg="light" className="loginCard">
								<Card.Body>
									<Card.Title className="text-center">
										<h1>Login</h1>
									</Card.Title>
									<Form onSubmit={handleSubmit}>
										<Form.Group controlId="formUsername">
											<Form.Label>Username</Form.Label>
											<Form.Control
												name="username"
												type="username"
												placeholder="Username"
												onChange={handleChange}
											/>
											{errors.username.length > 0 && (
												<Form.Text className="error">
													{errors.username}
												</Form.Text>
											)}
										</Form.Group>

										<Form.Group controlId="formPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												name="password"
												type="password"
												placeholder="Password"
												onChange={handleChange}
											/>
											{errors.password.length > 0 && (
												<Form.Text className="error">
													{errors.password}
												</Form.Text>
											)}
										</Form.Group>

										<Button
											variant="primary"
											type="submit"
											className="btn-block"
										>
											Submit
										</Button>
									</Form>
								</Card.Body>
								<Card.Footer>
									<p className="font-small grey-text d-flex justify-content-end">
										Don't have an account?
										<a
											href="/register"
											className="blue-text ml-1"
										>
											Sign Up
										</a>
									</p>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
}

export default Login
