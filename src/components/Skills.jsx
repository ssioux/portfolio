import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactImg from "../assets/images/langs/react.png"
import bootstrapImg from "../assets/images/langs/bootstrap.png"
import cssImg from "../assets/images/langs/css.png"
import expressImg from "../assets/images/langs/express.png"
import htmlImg from "../assets/images/langs/html.png"
import jsImg from "../assets/images/langs/js.png"
// import jwtImg from "../assets/images/langs/jwt.png"
import mongodbImg from "../assets/images/langs/mongodb.png"
import nodejsImg from "../assets/images/langs/nodejs.png"
function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
                <h2>Skills</h2>
                <Carousel
                  responsive={responsive}
                  className="owl-carousel owl-theme skill-slider"
                  arrows
                  autoPlay
                  autoPlaySpeed={2000}
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
                    <img src={reactImg} alt="react" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={jsImg} alt="js" />
                    <h5>JS ES6</h5>
                  </div>
                  <div className="item">
                    <img src={nodejsImg} alt="node" />
                    <h5>node.js</h5>
                  </div>
                  <div className="item">
                    <img src={mongodbImg} alt="mongo" />
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <img src={expressImg} alt="express" />
                    <h5>Express.js</h5>
                  </div>
                  <div className="item">
                    <img src={htmlImg} alt="html" />
                    <h5>HTML5</h5>
                  </div>
                  <div className="item">
                    <img src={cssImg} alt="css" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={bootstrapImg} alt="bootstrap" />
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
