
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import project1 from "../assets/img/esChall-project.png"

import bg3 from "../assets/img/bg3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Projects() {

  const projects = [
    {
      title: "es-Challenge",
      description: "Tourney generator",
      imgUrl: project1,
      live: "https://es-challenge.netlify.app/",
      gitServer: "https://github.com/ssioux/es-challenge-server.git",
      gitClient: "https://github.com/ssioux/es-challenge-client.git"
    },
    {
      title: "es-Challenge",
      description: "Tourney generator",
      imgUrl: project1,
      live: "https://es-challenge.netlify.app/"
    },
    {
      title: "es-Challenge",
      description: "Tourney generator",
      imgUrl: project1,
      live: "https://es-challenge.netlify.app/"
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
              <p>I show you to all the big and small websites I have done so far</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">1 - 6</Nav.Link>
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
                              <img src={project.imgUrl} />
                              <div className="proj-txtx">
                                <h4>{project.title}</h4>
                                <span>{project.description}</span>
                                <ul>                   
                                {project.live && <li><a href={project.live} target="_blank">Live</a></li> }                               
                                {project.gitServer && <li><a href={project.gitServer} target="_blank">GitHub-Server</a></li>}
                                {project.gitClient &&  <li><a href={project.gitClient} target="_blank">GitHub-Client</a></li>}
                                </ul>              
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