import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiFlutter,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiPostman
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
