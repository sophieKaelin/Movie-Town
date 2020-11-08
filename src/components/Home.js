import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card, Row, Col, Container, Image } from "react-bootstrap"
import Feed from "./Feed.js"

const Home = ({ user, users, reviews, setReviews, setUser, setUsers }) => {
	return (
		<Container>
			<Row
				className="d-flex justify-content-center"
				style={{ marginTop: "50px" }}
			>
				<Col sm={4}>
					<Card>
						<Card.Header>
							<Image
								src={user.avatar}
								style={{
									height: "300px",
									width: "300px",
									borderRadius: "3px",
									marginTop: "5px",
								}}
							/>
						</Card.Header>
						<Card.Body>
							You are logged in as {user.username}
						</Card.Body>
					</Card>
				</Col>

				<Col sm={8}>
					{reviews.length !== 0
						? reviews
								.slice(0)
								.reverse()
								.map((r) => (
									<Feed
										review={r}
										user={user}
										users={users}
										reviews={reviews}
										setReviews={setReviews}
										setUser={setUser}
										setUsers={setUsers}
									/>
								))
						: null}
				</Col>
			</Row>
		</Container>
	)
}

export default Home
