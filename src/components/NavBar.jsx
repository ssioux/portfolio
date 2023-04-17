import navIcon1 from "../assets/social/in.png";
import navIcon2 from "../assets/social/github.png";
import navIcon3 from "../assets/social/correo.png";

import navIcon1Hover from "../assets/social/hoverin.png";
import navIcon2Hover from "../assets/social/githubhover.png";
import navIcon3Hover from "../assets/social/hovercorreo.png";

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import siouxLogo from "../assets/images/siouxlogo.png";
function NavBar(props) {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Social Icon States
  const [icon1, setIcon1] = useState(navIcon1);
  const [icon2, setIcon2] = useState(navIcon2);
  const [icon3, setIcon3] = useState(navIcon3);

  // Sticky Navbar when scrolls down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    props.setNavLinkOn(value)
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="navbar-link">
          <img src={siouxLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              className={
                activeLink === "credentials" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("credentials")}
            >
              Credentials
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="new-social">
              <a
                href="https://www.linkedin.com/in/david-lázaro/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={icon1}
                  alt="linkedin"
                  onMouseOver={() => setIcon1(navIcon1Hover)}
                  onMouseOut={() => setIcon1(navIcon1)}
                />
              </a>
              <a
                href="https://github.com/ssioux"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={icon2}
                  alt="github"
                  onMouseOver={() => setIcon2(navIcon2Hover)}
                  onMouseOut={() => setIcon2(navIcon2)}
                />
              </a>
              <a
                href="mailto:dlazaro7@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={icon3}
                  alt="email"
                  onMouseOver={() => setIcon3(navIcon3Hover)}
                  onMouseOut={() => setIcon3(navIcon3)}
                />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
