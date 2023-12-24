import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import crousalImg1 from "../images/crousalImg1.jpg";
import crousalImg2 from "../images/crousalImg2.jpg";
import product1 from "../images/product1.jpg";
import product2 from "../images/product7.jpg";
import product3 from "../images/product2.jpg";
import product4 from "../images/product4.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={crousalImg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crousalImg2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <CardGroup className="my-3">
        <Card className="mx-1">
          <Card.Img variant="top" src={product1} />
          <Card.Body>
            <Card.Title>Monochrome Brushes</Card.Title>
            <Card.Text>
              Enhance your beauty routine with our exquisite makeup brush set,
              crafted to perfection for flawless application and stunning
              results.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-1">
          <Card.Img variant="top" src={product2} />
          <Card.Body>
            <Card.Title>Translucent Powders</Card.Title>
            <Card.Text>
              Unlock the secret to a truly flawless, airbrushed finish with our
              premium translucent powders. These finely milled, weightless
              formulas effortlessly set your makeup, blur imperfections.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-1">
          <Card.Img variant="top" src={product3} />
          <Card.Body>
            <Card.Title>All in One Set</Card.Title>
            <Card.Text>
              Experience professional-level precision and artistry with our
              curated makeup brush set, designed to elevate your makeup game to
              the next level.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="my-5">
        <Card style={{ width: "35rem" }} className="mx-2">
          <Card.Img variant="top" src={product4} />
          <Card.Body>
            <Card.Text>
            At the forefront lies an array of eyeshadow palettes, each housing a spectrum of hues ranging from earthy neutrals to dazzling metallics, promising endless possibilities for eye-catching looks.
            Beside them rests a delicate palette of blush, boasting shades that whisper of flushed radiance and a natural, sun-kissed glow.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="d-flex flex-column justify-content-center bg-dark">
            WELCOME TO
            <br />
            <h2>Makeup Store</h2>
            <br />
            The store where the vibrant hues of creativity dance amidst the aisles, beckoning you into a world where brushes are wands and palettes hold endless potential. Here, each product whispers promises of self-expression and empowerment, inviting you to explore the artistry of makeup. 
            From subtle enhancements to bold transformations, discover a haven where beauty knows no bounds, and every stroke of pigment becomes a canvas for your unique story.
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Home;
