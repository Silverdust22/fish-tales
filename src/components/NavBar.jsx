import { NavLink } from "react-router-dom";
import "./NavBar.css";
import salmon from "../assets/images/salmon.png";

function NavBar() {
  return (
    <div className="nav-container">
      <h1>Fish Tales</h1>
      <img src={salmon} width="50" height="50" className="fish-icon" />

      <nav className="nav-bar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "style-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "active-link" : "style-link"
          }
        >
          Fish Gallery
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "active-link" : "style-link"
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : "style-link"
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
