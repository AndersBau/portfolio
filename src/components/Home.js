import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";
import BottonContact from "./BottonContact";
import WorkListHome from "./WorkListHome";
const Home = () => {
    const mainText = React.createRef();

    useEffect(() => {
        gsap.to(mainText.current, {color: "#8c0", duration: 2})
    }, [mainText])
  return (
    <div className="home-page-wrapper">
      <section id="intro">
        <div className="mainBox gradient">
          <div className="mainBox-inside" ref={mainText}>
            <h2 className="mainBox-intro" >
              Hi, thanks for comming to my site! <br />
              I’m <span>Anderson</span>
              <br />a fullstack <span>Developer</span>  <br />
              based <br />
              in New York City.
            </h2>
            <div className="mainBox-down">
              <div className="mainBox-botton">
                <Link to="/#ShortCutProjects">
                  <img
                    src="/img/view work-white.png"
                    alt=""
                    className="mainBox-boton-text"
                  />
                </Link>
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
            <div id="ShortCutProjects"></div>
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
