import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav id="navbar">
      <label className="mini-logo">
        <Link>
          <img src={"/siouxlogo2.png"} alt="logo" />
        </Link>
      </label>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
