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
  

  return (
    <div>

      {/* TODO: add animation with my picture */}
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Skills</h2>
              <div className="skill-bx wow zoomIn">
                
              
               
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
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
