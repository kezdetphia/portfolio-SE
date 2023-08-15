import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/nav-icon1.svg";

import github from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer p-4">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>Mark Feher</h3>
            <p>Software Engineer</p>
            <p>fehermark88@gmail.com</p>
            <p>© 2023 Mark Feher. </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/markfeher8/" target="_blank" rel='noreferrer'><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/kezdetphia" target="_blank" rel="noreferrer"><img src={github} alt=""  /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}