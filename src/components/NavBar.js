import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const NavBar = () => {
	const history = useHistory()

	return (
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
			<Navbar.Brand href="/home">Movie-Town</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/profile">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-person-circle mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
							<path
								fill-rule="evenodd"
								d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
							/>
							<path
								fill-rule="evenodd"
								d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
							/>
						</svg>
						Profile
					</Nav.Link>
					<Nav.Link href="#movieList">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-list mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
						Movie List
					</Nav.Link>
					<Nav.Link href="/myMovies">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-film mr-2 mb-1"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"
							/>
						</svg>
						My Movies
					</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					<Button
						variant="light"
						className="ml-2"
						onClick={() => history.push("/login")}
					>
						Login
					</Button>
					<Button variant="light" className="ml-2">
						Logout
					</Button>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar
