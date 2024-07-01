import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nexusPlayImage from "../../Assets/Projects/preview-nexus-play.png";
import chessJsImage from "../../Assets/Projects/preview-chess-js.png";

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={nexusPlayImage}
                            isBlog={false}
                            title="Nexus Play"
                            description="Tienda dedicada a la venta de videojuegos inspirada en empresas de su competencia como Steam. Aplicación web construida con Laravel."
                            ghLink="https://github.com/raulv7z/nexus-play"
                            demoLink="#"
                        />
                    </Col>
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={chessJsImage}
                            isBlog={false}
                            title="Chess JS"
                            description="Proyecto para jugar al ajedrez 1 contra 1 en el mismo dispositivo. Aplicación web construida desde cero únicamente con Vanilla Javascript."
                            ghLink="https://github.com/raulv7z/chess-js"
                            demoLink="https://chess-js-03m.pages.dev/"
                        />
                    </Col>

                    {/* ... */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
