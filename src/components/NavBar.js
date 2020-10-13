import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/home">Movie-Town</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="#movieList">Movie List</Nav.Link>
          <Nav.Link href="#myMovies">My Movies</Nav.Link>
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
  );
};

export default NavBar;
