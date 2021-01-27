import React from "react"
import Carousel from "react-bootstrap/Carousel"
import avatar from "../moviePosters/avatar.png"
import frozen from "../moviePosters/frozen.png"
import incredibles from "../moviePosters/incredibles.png"
import schitts from "../moviePosters/schitts.png"
import simpsons from "../moviePosters/simpsons.png"
import tmnt from "../moviePosters/tmnt.png"
import "../style/PosterCarousel.css"

const PosterCarousel = () => {
	return (
		<Carousel style={{ width: "56rem" }}>
			<Carousel.Item>
				<img className="d-block w-100" src={avatar} alt="avatar" />
				<Carousel.Caption className="textStroke">
					<h3>Avatar</h3>
					<p>
						A young boy with the ability to manipulate natural
						elements wakes up from a 100-year-long hibernation.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={frozen} alt="frozen" />
				<Carousel.Caption className="textStroke">
					<h3>Frozen</h3>
					<p>
						Fearless Anna joins forces with mountaineer Kristoff and
						his reindeer sidekick to find Anna's sister, Elsa.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={incredibles}
					alt="incredibles"
				/>
				<Carousel.Caption className="textStroke">
					<h3>Incredibles</h3>
					<p>
						Forced to adopt a civilian identity and stuck in a
						white-collar job, Mr Incredible itches to get back into
						action. When he is lured into a trap by the evil
						Syndrome, his family contrives to save him.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={schitts}
					alt="schitts creek"
				/>
				<Carousel.Caption className="textStroke">
					<h3>Schitts Creek</h3>
					<p>
						A married couple suddenly go bankrupt and the only
						remaining asset they have is an ugly small town named
						Schitt's Creek.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={simpsons} alt="simpsons" />
				<Carousel.Caption className="textStroke">
					<h3>Simpsons</h3>
					<p>
						Working-class father Homer Simpson and his dysfunctional
						family deal with comical situations and the
						ups-and-downs of life in the town of Springfield.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={tmnt}
					alt="Teenage Mutant Ninja Turtles"
				/>
				<Carousel.Caption className="textStroke">
					<h3>Teenage Mutant Ninja Turtles</h3>
					<p>
						A quartet of humanoid turtles, trained by their mentor
						in ninjitsu, must learn to work together to face the
						menace of Shredder and the Foot Clan.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default PosterCarousel
