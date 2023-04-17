import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moon from "../assets/images/moon.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import * as Icon from "react-bootstrap-icons";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Credentials from "./Credentials";


function Banner() {
  const [navLinkOn, setNavLinkOn] = useState("home");
  console.log("🚀 ~ file: Banner.jsx:11 ~ Banner ~ navLinkOn:", navLinkOn);
  return (
    <>
      <NavBar setNavLinkOn={setNavLinkOn} />
      <section className="back-bg">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}></Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={moon} alt="animated-moon" id="animated-moon"/>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

        <div className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                      id="text-fixed"
                    >
                      {navLinkOn === "home" && (
                        <>
                          <h1>
                            Hi! I'm David Lázaro, Full Stack Web Developer
                          </h1>
                          <p>
                            My full name is David Lázaro Escolar. I am a Full
                            Stack Developer in love with this sector. With the
                            aim of developing my passion I studied at ironhack,
                            where I learned a lot. Problem solving skills
                            (helping other classMates) & create a good and clean
                            code with the help of our amazing teachers. These
                            are just some of the things that i learned aside
                            from many more. I am always looking to improve my
                            skills and constantly learn new things. I like
                            teamwork and work environments where I can grow both
                            professionally and personally. If you want to get in
                            touch with me, feel free to call me or send me a
                            message!
                          </p>
                          <div>
                            <a
                              href="https://drive.google.com/file/d/15Z0eBXOfyRqSsxAAD4OmG_48pW5HhRu3/view"
                              target="blank"
                              style={{ textDecoration: "none" }}
                            >
                              <button className="vvd" id="curriculum">
                                My Curriculum <Icon.Download />
                              </button>
                            </a>
                          </div>
                        </>
                      ) }

                      {navLinkOn === "skills" && <Skills/> }
                      {navLinkOn === "credentials" && <Credentials/> }
                     
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Banner;
