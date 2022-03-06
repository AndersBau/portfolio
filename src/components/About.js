import React from "react";
import BottonContact from "./BottonContact";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="title">
    <h1 className="title-text">About</h1>
    <div className="title-underline">
    </div>
  </div>
    <div className="picture">
      <div className="picture-container">
            <div className="picture-me"></div>
      </div>
    </div>
    <section className="content">
      <p className="content-text">
        Hi there, <br/>
        I’m a web developer based in New York. I went to graphic design school and most recently I graduated from FullStack Academy which has given me the tools to create powerful seamless websites using technologies like React, Node.Js, HTML and CSS.<br/><br/>
        I have experience working in small teams for different projects following Agile development methodologies and DevOps principles.

        <br />
        I'm always growing  and learning new and better ways of solving problems. I'm intrigued by the thought  process of creativity and have a passion for it.<br/>
        I'm always excited for the evolution of technology and passionate about user centered experiences.
      </p><br/>
      <h3>My tech stack</h3>
      <p>Proficient:</p>
      <p className="content-list">
        JavaScript, React, Redux, HTML, CSS, git, Node, Express, PostgreSQL
      </p>
      <div className="content-logos">
          <div className="content-logos-skills">
            <img src="/img/skills-1.png" alt="skills logo images" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-2.png" alt="skills logo images" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-3.png" alt="skills logo images" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-4.png" alt="skills logo images" className="content-logo" />
          </div>
          <div className="content-logos-skills">
            <img src="/img/skills-8.png" alt="skills logo images" className="content-logo" />
          </div>

      </div>
      <p>Knowledgeable</p>
      <p className="content-list">
        Sequelize, Webpack, SASS
      </p>
      <div className="content-logos">
        <div className="content-logos-skills">
          <img src="/img/skills-9.png" className="content-logo" />
        </div>
        <div className="content-logos-skills">
          <img src="/img/skills-10.png" className="content-logo" />
        </div>
        <div className="content-logos-skills">
          <img src="/img/skills-11.png" className="content-logo" />
        </div>

    </div>
      <p>Familiar</p>
      <p className="content-list">
        MongoDB, firebase, Mocha, Jasmin
      </p>
      <p className="content-text">
        Most of the design is done in photoshop, Illustrator  and for prototyping I use figma.
      </p>
      <div className="content-logos">
        <div className="content-logos-skills">
            <img src="/img/skills-5.png" className="content-logo" />
        </div>
        <div className="content-logos-skills">
            <img src="/img/skills-6.png" className="content-logo" />
        </div>
        <div className="content-logos-skills">
            <img src="/img/skills-7.png" className="content-logo" />
        </div>
    </div>
    </section>
    <BottonContact />
    </div>
  )
}

export default About;
