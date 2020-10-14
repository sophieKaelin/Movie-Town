import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron, Image, Button } from "react-bootstrap";
import "../style/Profile.css";

const Profile = () => {
	let avatar = "https://robohash.org/Dwight";

	return (
		<div>
			<Jumbotron>
				<Image src={avatar} roundedCircle className="profileImage" />
				<h1>FirstName LastName</h1>
				<h3>Username</h3>

				<Button variant="primary" className="followBtn">
					Follow
				</Button>
				<Button variant="primary" className="editBtn">
					Edit
				</Button>
			</Jumbotron>
		</div>
	);
};

export default Profile;
