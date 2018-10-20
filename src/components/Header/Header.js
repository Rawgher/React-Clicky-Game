import React from "react";
import "./Header.css";

const Header = props => <div>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <p className="navbar-brand">Clicky Game</p>
    <h3>{props.message}</h3>
    <p className="nav-item nav-link">Score: {props.userScore || 0} | High Score: {props.highScore}</p>
  </nav>
</div>

export default Header;