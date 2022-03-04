import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header id="header">
      <div className="fixedmenu"></div>
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_li"><Link to="/">Home</Link></li>
          <li className="nav_li"><Link to="/about">About</Link></li>
          <li className="nav_li"><Link to="/portfolio">Portfolio</Link></li>
          <li className="nav_li"><Link to="/contact">Contact</Link>    </li>
        </ul>

        <div className="nav_burguer">
          <div className="nav_burguer--1"></div>
          <div className="nav_burguer--2"></div>
          <div className="nav_burguer--3"></div>
        </div>
      </nav>
      <Link to="/">
        <h3 className="logo">
          ANDERSON
          <span className="logo-last-name">BAUTISTA</span> <br />
          <span className="logo-note">
            <p>//Fullstack Developer</p>
          </span>
        </h3>
      </Link>
    </header>
  );
};

export default Navbar;
