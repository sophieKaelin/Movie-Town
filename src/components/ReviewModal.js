import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Modal } from "react-bootstrap"
import ReviewForm from "./ReviewForm.js"

const ReviewModal = ({
	user,
	addNewReview,
	movie,
	setMovie,
	show,
	handleClose,
}) => {
	return (
		<div>
			<Modal show={show} onHide={handleClose} animation={false} size="xl">
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<ReviewForm
						user={user}
						addNewReview={addNewReview}
						movie={movie}
						setMovie={setMovie}
						handleClose={handleClose}
					/>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default ReviewModal
