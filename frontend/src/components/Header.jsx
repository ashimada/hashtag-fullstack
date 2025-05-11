import logoSpotify from "../assets/spotify-logo.png";
import { Link } from "react-router-dom";

function Header() {
  // console.log("Header!");

  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo Spotify" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
}

export default Header;
