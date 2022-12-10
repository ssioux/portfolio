import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>About Skills</h2>
                <p>
                  I have learned different programming languages ​​so far and as
                  far as my skills are concerned<br></br>
                </p>
                <Carousel
                  responsive={responsive}
                  className="owl-carousel owl-theme skill-slider"
                  arrows
                  autoPlay
                  autoPlaySpeed={3000}
                  centerMode={false}
                  containerClass="container-with-dots"
                  customTransition="all 1s linear"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                  transitionDuration={1000}
                >
                  <div className="item">
                    <img src="/images/langs/react.png" alt="react" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/js.png" alt="js" />
                    <h5>JS ES6</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/nodejs.png" alt="node" />
                    <h5>node.js</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/mongodb.png" alt="mongo" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/express.png" alt="express" />
                    <h5>Express.js</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/html.png" alt="html" />
                    <h5>HTML5</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/css.png" alt="css" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src="/images/langs/bootstrap.png" alt="bootstrap" />
                    <h5>Bootstrap</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
