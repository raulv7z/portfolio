import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenid@, me llamo <span className="purple">Raúl</span>.
            <br />
            <br />
            Soy un apasionado <span className="purple">desarrollador</span> de software
            con una sólida capacidad <span className="purple">analítica</span>, especializado en la resolución de problemas.
            <br/>
            <br />
            Me caracterizo por el autodidactismo y la creatividad, siempre en busca del aprendizaje y la mejoría constante.
            <br />
            <br />
            Si quieres contactar conmigo, puedes hacerlo a través de&nbsp;
            <a href="mailto:rmm0.office@gmail.com" target="_blank" 
                rel="noopener noreferrer" style={{"color":"#c770f0"}}>
              <span className="purple">email</span>
            </a>
            &nbsp;o mediante&nbsp;
            <a href="https://www.linkedin.com/in/rmm0/" target="_blank" 
                rel="noopener noreferrer" style={{"color":"#c770f0"}}>
              <span className="purple">LinkedIn</span>
            </a>.
            Estaré encantado de recibir tu mensaje.
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            Programa eficiente, rápido y legible.{" "}
          </p>
          <footer className="blockquote-footer">Raúl.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
