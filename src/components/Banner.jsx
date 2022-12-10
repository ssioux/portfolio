import { Container, Row, Col } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";

import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  console.log("🚀 ~ file: Banner.jsx:4 ~ Icon", Icon);

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
                  <img src="/images/logo.png" alt="Header Img" />
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
                    <h1>{`Hi! I'm Sioux, Full Stack Web Developer`}</h1>
                    <p>
                      My full name is David Lázaro Escolar. I am a Full Stack
                      Developer in love with this sector. With the aim of
                      developing my passion I studied at ironhack. When I first
                      came to this bootcamp, I had no knowledge of programming.
                      But now with the help of strong aspirations and teachers,
                      my level of knowledge has greatly increased and I can
                      freely create web site that are used in our daily lives
                    </p>
                    <button onClick={() => console.log("connect")}>
                      Download Cv <Icon.Download size={25} />
                    </button>
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
