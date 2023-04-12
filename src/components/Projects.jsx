
// react Hooks
import {useState} from "react"
// Bootstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// Proyect pictures
import project1 from "../assets/img/esChall-project.png"
import project2 from "../assets/img/ironworld-project.png"
import project3 from "../assets/img/suicidefarm-project.png"

// Project images
import http from "../assets/images/http.png"
import httpHover from "../assets/images/httpHover.png"

import git from "../assets/images/git.png"
import gitHover from "../assets/images/gitHover.png"

import gitFront from "../assets/images/gitFront.png"
import gitFrontHover from "../assets/images/gitFrontHover.png"




// Web Animations
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Projects() {

  const [httpIMG, setHttpIMG] = useState(http);
  const [gitServer, setGitServer] = useState(git);
  const [gitClient, setGitClient] = useState(gitFront);


  const projects = [
    {
      title: "es-Challenge",
      description: "Tourney generator",
      imgUrl: project1,
      langs: "React, JWT, Nodejs, Express, JavaScript, MongoDB, Axios, html, css",
      live: "https://es-challenge.netlify.app/",
      gitServer: "https://github.com/ssioux/es-challenge-server.git",
      gitClient: "https://github.com/ssioux/es-challenge-client.git"
    },
    {
      title: "Iron World",
      description: "Social - Job Hunt",
      imgUrl: project2,
      langs: "Nodejs, Express, JavaScript, MongoDB, HBS, html, css",
      live: "https://ironworld.cyclic.app/",
      gitServer: "https://github.com/borjacabello/IronWorld"
    },
    {
      title: "Suicide Farm",
      description: "Shooter Game",
      imgUrl: project3,
      langs: "JavaScript, Jquery, canvas, html, css",
      live: "https://ssioux.github.io/Suicide-Farm/",
      gitServer: "https://github.com/ssioux/Suicide-Farm.git" 
    },
  ];
  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">1 - 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" disabled>Coming Soon</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" disabled>Coming Soon</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                          
                            <Col size={12} sm={6} md={4} key={index}>
                            <div className="proj-imgbx">
                              <img src={project.imgUrl} alt="projectImg"/>
                              <div className="proj-txtx">
                                <h4>{project.title}</h4>
                                <h5>{project.description}</h5>
                                <ul>
                                {project.langs && <span>{project.langs}</span> }
                                </ul>
                                <div className="project-links">
                                {project.live && <li><a href={project.live} target="_blank" rel="noreferrer"> <img src={httpIMG} alt="live-http"   onMouseOver={() => setHttpIMG(httpHover)} onMouseOut={() => setHttpIMG(http)}/> </a></li> }                               
                                {project.gitServer && <li><a href={project.gitServer} target="_blank" rel="noreferrer"><img src={gitServer} alt="git-back" onMouseOver={() => setGitServer(gitHover)} onMouseOut={() => setGitServer(git)}/></a></li>}
                                {project.gitClient &&  <li><a href={project.gitClient} target="_blank" rel="noreferrer"><img src={gitClient} alt="git-front" onMouseOver={() => setGitClient(gitFrontHover)} onMouseOut={() => setGitClient(gitFront)}/></a></li>}   
                                </div>       
                              </div>
                            </div>
                          </Col>
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
   
  </section>
  )
}

export default Projects