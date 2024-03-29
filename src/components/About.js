import React from "react";
import BottonContact from "./BottonContact";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="title">
        <h1 className="title-text">About</h1>
        <div className="title-underline"></div>
      </div>
      <div className="picture">
        <div className="picture-container">
          <div className="picture-me"></div>
        </div>
      </div>
      <section className="content">
        <p className="content-text">
          <span>Hi there,</span><br />
          I’m a web developer based in New York. I come from a background of graphic design and most recently I graduated from the Software Engineer program at FullStack Academy which has given
          me the tools to create powerful seamless websites using modern technologies
          like JavaScript, React, CSS, NodeJS and Express.
          <br />
          <br />
          I have experience working in small teams for various projects
          following agile development methodologies.
          <br />
          I'm always learning new and better ways of solving
          problems. I'm intrigued by the thought process of creativity and have
          a passion for it.
          <br />
          I'm excited for the evolution of technology and passionate
          about user centered .
        </p>
        <br />
        <h3>Tech Stack</h3>
        <p>Proficient:</p><br/>
        <p className="content-list">
          JavaScript, React, Redux, HTML, CSS, git, Node, Express, PostgreSQL
        </p>
        <div className="content-logos">
          <div className="content-logos-skills">
            <img
              src="/img/skills-1.png"
              alt="skills logo images"
              className="content-logo"
            />
          </div>
          <div className="content-logos-skills">
            <img
              src="/img/skills-2.png"
              alt="skills logo images"
              className="content-logo"
            />
          </div>
          <div className="content-logos-skills">
            <img
              src="/img/skills-3.png"
              alt="skills logo images"
              className="content-logo"
            />
          </div>
          <div className="content-logos-skills">
            <img
              src="/img/skills-4.png"
              alt="skills logo images"
              className="content-logo"
            />
          </div>
          <div className="content-logos-skills">
            <img
              src="/img/skills-8.png"
              alt="skills logo images"
              className="content-logo"
            />
          </div>
        </div>
        <p>Knowledgeable</p>
        <p className="content-list">Sequelize, Webpack, SASS</p>
        <div className="content-logos">
          <div className="content-logos-skills">
            <img src="/img/skills-9.png" alt="Anderson Bautista Skills" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-10.png" alt="Anderson Bautista Skills" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-11.png" alt="Anderson Bautista Skills" className="content-logo" />
          </div>
        </div>
        <p>Familiar</p>
        <p className="content-list">MongoDB, firebase, Mocha, Jasmin</p><br />
        <p className="content-text">
          Wireframe U/I and prototype tools.
        </p>
        <p className="content-list">Photoshop, Figma</p>
        <div className="content-logos">
          <div className="content-logos-skills">
            <img src="/img/skills-5.png" alt="Anderson Bautista Skills" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-7.png" alt="Anderson Bautista Skills" className="content-logo" />
          </div>
        </div>
      </section>
      <BottonContact />
    </div>
  );
};

export default About;
