import React from "react";
import { Link } from "react-router-dom";

const BottonContact = () => {
  return (
    <section id="bottonContact">
    <div className="bottonContact-container">
  <p className="bottonContact-text">
    Do you like what you see?<br/>
    I’m currently <span>available to hire </span><br/>
    and open to new and <br/>
    existing projects,
     if you think  I can add value
    to your team <br/>
    drop me a line and
    I’ll  be happy to help.
  </p>
  <Link className="bottonContact-link" to="/contact">Let's Talk</Link>
</div>
</section>
  )
}

export default BottonContact;
