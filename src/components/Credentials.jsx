// Credentials
import ironHack from "../assets/credentials/IronHack_dev_certificate.png";
import gitHub from "../assets/credentials/Git-Certificate.jpg";

function Credentials() {
  return (
    <section className="credentials-main">
      <h2>Credentials</h2>
      <div className="crededentials-container">
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
