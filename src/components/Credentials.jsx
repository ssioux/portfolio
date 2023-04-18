// Credentials
import ironHack from "../assets/credentials/IronHack_dev_certificate.png";
import gitHub from "../assets/credentials/Git-Certificate.jpg";

function Credentials() {
  return (
    <section className="credentials-main" id="credentials">
        <h2>Credentials</h2>
      <div className="credentials-container">
      
        <div className="credentials-pic">
          <img src={ironHack} alt="ironHack_certificate" />
        </div>
        <div className="credentials-pic">
          <img src={gitHub} alt="gitHub_certificate" />
        </div>
      </div>
    </section>
  );
}

export default Credentials;
