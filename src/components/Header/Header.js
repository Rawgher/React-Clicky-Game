import React from "react";
import "./Header.css";

const Header = props => <div className="header">

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <p className="navbar-brand">Clicky Game</p>
   <h3>{props.message}</h3>
   <p className="nav-item nav-link float-right">Score: {props.userScore || 0} | High Score: {props.highScore}</p>
  </nav>
</div>

export default Header;