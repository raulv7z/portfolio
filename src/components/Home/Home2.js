import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-no-bg.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Una breve <span className="purple"> introducción </span>
            </h1>
            <p className="home-about-body">
              ¡Hola! Soy <b className="purple">Raúl</b>, un apasionado del desarrollo de software.
              <br />
              <br />
              Este es mi portfolio. Aquí muestro información personal,
              algunas vías de contacto y expongo varios de mis proyectos públicos.
              <br />
              <br />Me caracteriza mi dedicación con mis objetivos,
              así como mi compromiso con ofrecer resultados
              <b className="purple"> de calidad</b>,
              siempre en búsqueda de la excelencia técnica.
              <br />
              <br />
              En lo personal, me siento cómodo tanto en el desarrollo
              <b className="purple"> frontend </b>
                como
              <b className="purple"> backend</b>,
              y también disfruto desarrollando aplicaciones fuera del ámbito web.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Conecta conmigo</h1>
            <p>
              Te dejo algunas vías para <span className="purple">contactar </span> conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raulv7z"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rmm0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rmm0.office@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
