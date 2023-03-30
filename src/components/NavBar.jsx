import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/email1.svg";
import navIcon2 from "../assets/img/git2.svg";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as Icon from "react-bootstrap-icons";
import siouxLogo from "../assets/images/siouxlogo.png"
function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/david-lázaro/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkin" />
              </a>
              <a
                href="https://github.com/ssioux"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="git" />
              </a>
              <a
                href="mailto:dlazaro7@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="email" />
              </a>
            </div>
            {/* <div>
              <a
                href="https://drive.google.com/file/d/1tj9KK9Ivy0pBv0GCjcJK6_8riBFd1G4x/view?usp=sharing"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <button className="vvd" id="curriculum">
                  <span>
                    Curriculum <Icon.Download />
                  </span>
                </button>
              </a>
            </div> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
