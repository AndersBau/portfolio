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
              Hi, thanks for visiting my site! <br />
              I’m <span>Anderson</span>
              <br />a fullstack Web <span>Developer</span> <br />
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
      <div className="gradient-divider"></div>
      <section id="thingsMade">
        <h2 className="thingsMade-title">Things I've made</h2>
        <WorkListHome />
      </section>
      <BottonContact />
    </div>
  );
};

export default Home;
