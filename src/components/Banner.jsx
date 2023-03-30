import { Container, Row, Col } from "react-bootstrap";
import moon from "../assets/images/moon.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  return (
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
                  <img src={moon} alt="animated-moon" />
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
                    <h1>Hi! I'm David Lázaro, Full Stack Web Developer</h1>
                    <p>
                      My full name is David Lázaro Escolar. I am a Full Stack
                      Developer in love with this sector. With the aim of
                      developing my passion I studied at ironhack, where I
                      learned a lot. Problem solving skills (helping other classMates) & create a good and clean code with the help of our amazing teachers. These are some of the things that i learned aside from many more.
                      I am always looking to improve my skills and constantly learn new things. I
                      like teamwork and work environments where I can grow both
                      professionally and personally. 
                      If you want to get in touch
                      with me, feel free to call me or send me a message!
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
