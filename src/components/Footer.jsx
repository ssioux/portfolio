import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/log.png"

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/email1.svg';
import navIcon2 from '../assets/img/git2.svg';


function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" style={{opacity: "0.4"}}/>
        </Col>
        <Col size={12} sm={4} className="text-center text-sm-end">
        
          <div className="footer-social-icon">
            <a href="https://www.linkedin.com/in/david-lázaro/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkin" /></a>
            <a href="https://github.com/ssioux" target="_blank" rel="noreferrer"><img src={navIcon2} alt="git" /></a>
            <a href="mailto:dlazaro7@gmail.com" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a> 
          </div>
         
          <p>Thank you for attention</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer