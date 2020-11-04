import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import SearchBar from "./SearchBar.js"
import ReviewModal from "./ReviewModal.js"

const NavBar = ({
	user,
	setUser,
	movie,
	setMovie,
	addNewReview,
	show,
	handleClose,
	handleShow,
}) => {
	const history = useHistory()

	//TODO: Fix this so that it doesn't use localstorage
	const saveAndLogout = () => {
		console.log("You have been logged out")
		localStorage.removeItem("user")
		setUser(null)
		history.push("/login")
	}

	return (
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
			<Navbar.Brand href="/home">
				<span className="movie-logo">movie</span>{" "}
				<span className="town-logo">town</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/home">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-list mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
						Feed
					</Nav.Link>
					<Nav.Link href={"/profile/" + user.username}>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-person-circle mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
							<path
								fillRule="evenodd"
								d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
							/>
							<path
								fillRule="evenodd"
								d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
							/>
						</svg>
						Profile
					</Nav.Link>
					<Nav.Link href="/my/movies">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-film mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"
							/>
						</svg>
						My Movies
					</Nav.Link>
					<Nav.Link href="/reviews">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-pencil-square mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fillRule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
							/>
						</svg>
						My Reviews
					</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Navbar.Collapse className="justify-content-end">
				<SearchBar
					history={history}
					movie={movie}
					setMovie={setMovie}
				/>
				<NavDropdown
					alignRight
					id="dropdown-menu-align-right"
					flip
					title={
						<Image
							style={{
								height: "50px",
								width: "50px",
							}}
							alt="Logout"
							src={user.avatar}
							roundedCircle
						/>
					}
				>
					<NavDropdown.Item href="/myProfile">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-person-circle mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
							<path
								fillRule="evenodd"
								d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
							/>
							<path
								fillRule="evenodd"
								d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
							/>
						</svg>
						Profile
					</NavDropdown.Item>
					<NavDropdown.Item onClick={handleShow}>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-pencil-square mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fillRule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
							/>
						</svg>
						Write Review
					</NavDropdown.Item>
					<NavDropdown.Divider />
					{/* TODO: Buggy on all pages except home page */}
					<NavDropdown.Item onClick={saveAndLogout}>
						Logout
					</NavDropdown.Item>
				</NavDropdown>
			</Navbar.Collapse>
			{/* MODAL for the review */}
			<ReviewModal
				user={user}
				addNewReview={addNewReview}
				movie={movie}
				setMovie={setMovie}
				show={show}
				handleClose={handleClose}
			/>
		</Navbar>
	)
}

export default NavBar
