import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import product3 from "../images/product3.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const About = () => {
  return (
    <>
      <h1 className="head d-flex justify-content-center">About Us</h1>
      <CardGroup className="my-5">
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src={product3} />
        </Card>
        <Card>
          <Card.Body>
            WELCOME TO
            <br />
            <h2>Makeup Store</h2>
            <p>
            At our Makeup Store, beauty isn’t just about appearances; it’s a celebration of individuality. We believe in the transformative power of makeup, not just in enhancing features but in boosting confidence and self-expression.
            With a curated range of products sourced from global trends and timeless classics, we aim to be your creative playground
              <br />
              <br />
              Our mission is to empower everyone who walks through our doors—novices, enthusiasts, and professionals alike—to explore, experiment, and embrace their unique beauty.
              Step into our world where each product tells a story, each shade evokes an emotion, and every visit is an opportunity to redefine your beauty narrative
            </p>
            <h2>Reaching Nationwide</h2>
            <h2>Growing & Expanding</h2>            
            "From humble beginnings to a nationwide phenomenon, our journey is marked by an unwavering commitment to redefining beauty standards.
            As we grow and expand our horizons, our mission remains unchanged: to make beauty accessible to all corners of the country. With each expansion, we aim to not just open stores but create communities—a network of makeup enthusiasts united by their passion for self-expression.
            As we reach new destinations, our goal is to foster inclusivity, celebrate diversity, and continue being a beacon of innovation in the ever-evolving world of beauty."
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default About;
