import React from "react";
import { Link } from "react-router-dom";

const BottonContact = () => {
  return (
    <section id="bottonContact">
      <div className="bottonContact-container">
        <p className="bottonContact-text">
          Currently <span>available to hire </span>
          <br />
          and open to collaborate with other Devs.<br />If you think I can add value to your team
          feel free to
        </p>
        <a className="bottonContact-link" href="mailto:andersonBbautista@gmail.com" >
         contact me.
        </a>
      </div>
    </section>
  );
};

export default BottonContact;
