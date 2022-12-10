import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/email1.svg';
import navIcon2 from '../assets/img/git2.svg';
import {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom"



function NavBar() {


  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/" className="navbar-link">
        <img src="/images/siouxlogo.png" alt="Logo" />{' '}
           Sioux    
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/david-lázaro/" target="_blank"><img src={navIcon1} alt="linkin" /></a>
            <a href="https://github.com/ssioux" target="_blank"><img src={navIcon2} alt="git" /></a>
            <a href="mailto:dlazaro7@gmail.com" target="_blank"><img src={navIcon3} alt="" /></a> 
          </div>
          <HashLink to='#connect'>
            <button className="vvd"><span>Download my CV</span></button>
          </HashLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
     
  );
}

export default NavBar;
