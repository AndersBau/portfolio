import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] =useState(false);

  function openMenu() {
    setMenuIsOpen(!menuIsOpen);
  };
useEffect(()=> {

}, [openMenu])


  return (
    <header id="header">
      <div className="fixedmenu"></div>
      <nav className="nav">
        <ul className={menuIsOpen ? "nav_ul nav_ul--open" : "nav_ul"}>
          <li className="nav_li"><Link to="/" className="nav_li--link" onClick={() => openMenu()}>Home</Link></li>
          <li className="nav_li"><Link to="/about" className="nav_li--link" onClick={() => openMenu()}>About</Link></li>
          <li className="nav_li"><Link to="/portfolio" className="nav_li--link" onClick={() => openMenu()}>Portfolio</Link></li>
          <li className="nav_li"><Link to="/contact" className="nav_li--link" onClick={() => openMenu()}>Contact</Link>    </li>
        </ul>

        <div className="nav_burguer" onClick={() => openMenu()}>
          <div className={ menuIsOpen ? "nav_burguer--1 nav_b1--active" : "nav_burguer--1"}></div>
          <div className={ menuIsOpen ? "nav_burguer--2 nav_b2--active" : "nav_burguer--2"}></div>
          <div className={ menuIsOpen ? "nav_burguer--3 nav_b3--active" : "nav_burguer--3"}></div>
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
