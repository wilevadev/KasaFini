import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Accueil">
        <img src={logo} className="logo-kasa" alt="logo kasa" />
      </Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "link link-active" : "link" } end to="/">Accueil</NavLink>
        <NavLink className={({isActive}) => isActive ? "link link-active" : "link" } end to="/about">A Propos</NavLink>  
      </nav>
    </header>
  );
}

export default Header;