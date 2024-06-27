import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // SiPostman,
  SiLinux,
  SiCloudflare,
  // SiLinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
      </Col>
    </Row>
  );
}

export default Toolstack;
