import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nexusPlayImage from "../../Assets/Projects/preview-nexus-play.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí tienes algunos de mis proyectos más recientes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={5} className="project-card">
            <ProjectCard
              imgPath={nexusPlayImage}
              isBlog={false}
              title="Nexus Play"
              description="Tienda dedicada a la venta de videojuegos inspirada en empresas reales de su competencia como Instant Gaming o Steam. Aplicación web construida con Laravel."
              ghLink="https://github.com/raulv7z/nexus-play"
              demoLink="#"
            />
          </Col>

          {/* ... */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
