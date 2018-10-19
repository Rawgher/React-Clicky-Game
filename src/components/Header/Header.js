import React from "react";
import "./Wrapper.css";

const Header = () => <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand float-left">Clicky Game</p>
  <div className="collapse navbar-collapse float-right" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <p className="nav-item nav-link">Score: </p>
      <p className="nav-item nav-link"> 5 </p>
      <p className="nav-item nav-link"> | </p>
      <p className="nav-item nav-link">High Score: </p>
      <p className="nav-item nav-link"> 2</p>
    </div>
  </div>
</nav>
</div>

export default Header;