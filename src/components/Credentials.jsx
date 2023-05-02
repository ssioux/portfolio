// Credentials
import ironHack from "../assets/credentials/IronHack_dev_certificate.png";
import gitHub from "../assets/credentials/Git-Certificate.jpg";

function Credentials() {
  return (
    <section className="credentials-main" id="credentials">
        <h2>Credentials</h2>
      <div className="credentials-container">
      
        <div className="credentials-pic">
        <a href="https://www.credential.net/2a1055d5-1679-4aa5-9622-d499235357d9" target="_blank" rel="noreferrer"> <img src={ironHack} alt="ironHack_certificate" /> </a>
        </div>
        <div className="credentials-pic">
        <a href="https://www.udemy.com/certificate/UC-f02d61b2-0f93-4a2f-852d-795ae20590d5/" target="_blank" rel="noreferrer"> <img src={gitHub} alt="gitHub_certificate" /> </a>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
