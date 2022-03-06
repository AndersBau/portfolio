import React, { useEffect } from "react";

const Footer = () => {


    // let date = new Date();
    // let [year] = date.getFullYear()
  return (
    <footer className="footer">
    <div className="footer-social">
        <a className="footer-links" href="https://www.linkedin.com/in/andersonbb/" target="_blank">LinkedIn</a>
        <a className="footer-links" href="https://github.com/AndersBau" target="_blank">github</a>
        <a className="footer-links" href="https://dribbble.com/Andev11" target="_blank">Dribbble</a>
    </div>
    <p>© 2022 Anderson Bautista</p>
</footer>
  )
}

export default Footer;
