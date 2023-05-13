import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabhat Gupta </span>
            from <span className="purple"> Bhopal, Madhya Pradesh, India.</span>
            <br />I am a junior pursuing B.Tech in Information Technology and Mathematical Innovations in Delhi University.<span className="purple">(Batch of 2023)</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Potrait Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking Food
            </li>
            

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
