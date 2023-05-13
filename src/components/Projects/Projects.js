import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vecetary from "../../Assets/Projects/vecetary.gif";
import facemask from "../../Assets/Projects/facemask.jpeg";
import flutterfrontend from "../../Assets/Projects/flutterfrontend.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutterfrontend}
              isBlog={false}
              title="Flutter Fitness UI Screen"
              description="It is a sample of the end of the fitness app which consists of different cards, horizontal rails, feels card and there a lot more interesting frontend flutter applications."
              ghLink="https://github.com/Kakarot2002/FlutterFitnessUIScreen"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vecetary}
              isBlog={false}
              title="3D model flutter mobile application"
              description="It is a e-commerce flutter application which showcase the product in 3-D port view using vecetary items "
              ghLink="https://github.com/Kakarot2002/3DModleApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facemask}
              isBlog={false}
              title="Face Mask Detection"
              description="Trained a CNN classifier using dataset with Kaggle and tensorflow backened. The classifier sucessfully predicted that the face mask is present or not. And the highest accuracy obtained with the model was 82.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to detect the face mask of the person."
              ghLink="https://github.com/Kakarot2002/FaceMaskDetectionPY"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
