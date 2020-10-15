import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import avatar from "../moviePosters/avatar.png";
import frozen from "../moviePosters/frozen.png";
import incredibles from "../moviePosters/incredibles.png";
import schitts from "../moviePosters/schitts.png";
import simpsons from "../moviePosters/simpsons.png";
import tmnt from "../moviePosters/tmnt.png";

const PosterCarousel = () => {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>Feature Films</Card.Header>
      <Card.Body>
        <Carousel style={{ width: "50rem" }}>
          <Carousel.Item>
            <img className="d-block w-100" src={avatar} alt="avatar" />
            <Carousel.Caption>
              <h3>Avatar</h3>
              <p>
                A young boy with the ability to manipulate natural elements
                wakes up from a 100-year-long hibernation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frozen} alt="frozen" />
            <Carousel.Caption>
              <h3>Frozen</h3>
              <p>
                Fearless Anna joins forces with mountaineer Kristoff and his
                reindeer sidekick to find Anna's sister, Elsa.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={incredibles}
              alt="incredibles"
            />
            <Carousel.Caption>
              <h3>Incredibles</h3>
              {/* TODO: Add Caption */}
              <p>ADD CAPTION</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={schitts} alt="schitts creek" />
            <Carousel.Caption>
              <h3>Schitts Creek</h3>
              {/* TODO: Add Caption */}
              <p>ADD CAPTION</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={simpsons} alt="simpsons" />
            <Carousel.Caption>
              <h3>Simpsons</h3>
              {/* TODO: Add Caption */}
              <p>ADD CAPTION</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={tmnt}
              alt="Teenage Mutant Ninja Turtles"
            />
            <Carousel.Caption>
              <h3>Teenage Mutant Ninja Turtles</h3>
              {/* TODO: Add Caption */}
              <p>ADD CAPTION</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default PosterCarousel;
