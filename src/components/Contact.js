import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="title">
        <h1 className="title-text">Contact</h1>
        <div className="title-underline"></div>
      </div>
      <div className="contact-picture">
        <div className="picture-container-contact">
          <div className="picture-contact"></div>
        </div>
      </div>
      <section className="contact-content">
        <a href="mailto:andersonBbautista@gmail.com">
          <h3 className="content-email">andersonBbautista@gmail.com</h3>
        </a>
        <div className="content-box-text">
          <p className="content-text-contact">
            I’m currently <span>available to hire </span>
            <br />
            and open to new and <br />
            existing projects, if you think I can add value to your team drop me
            a line and I’ll be happy to help.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
