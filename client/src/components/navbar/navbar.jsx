import {Link} from "react-router-dom";

import SearchBar from "../searchbar/searchBar.jsx";
import logoRM from "../../assets/logorm.png";

import "./navbar.css";

export default function Navbar({onSearch, onChange, randomize, logout}) {
  return (
    <div className="nav-container">
      <img className="home-title" src={logoRM} alt="title" />
      <div className="navlinks">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/favs">
          Favs
        </Link>
        <p className="link" onClick={logout}>
          Logout
        </p>
      </div>

      <SearchBar onSearch={onSearch} onChange={onChange} />
      <button className="random" onClick={randomize}>
        ADD RANDOM
      </button>
    </div>
  );
}
