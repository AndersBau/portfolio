import React from "react";
import BottonContact from "./BottonContact";
import WorkListHome from "./WorkListHome";
const Home = () => {
  return (
    <div className="home-page-wrapper">
      <section id="intro">
        <div className="mainBox gradient">
          <div className="mainBox-inside">
            <h2 className="mainBox-intro">
              Hi, thanks for comming to my site! <br />
              I’m <span>Anderson</span>
              <br />a fullstack <span>Developer</span> <br />
              based <br />
              in New York City.
            </h2>
            <div className="mainBox-down">
              <div className="mainBox-botton">
                <a href="/work">
                  <img
                    src="/img/view work-white.png"
                    alt=""
                    className="mainBox-boton-text"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="middle_divider">
          <div className="middle_divider-split">
            <div className="middle_divider-phrase">
              <p>I create websites</p>
            </div>
          </div>
          <div className="middle_divider-split">
            <div className="middle_divider-col">
                <p className="middle-text">
                A developer with experience working on teams following Agile development methodologies, utilizing modern web technologies.
                </p>
            </div>
          </div>
      </div>
      <section id="thingsMade">
        <h2 className="thingsMade-title">Featured projects</h2>
        <WorkListHome />
      </section>
      <BottonContact />
    </div>
  );
};

export default Home;
