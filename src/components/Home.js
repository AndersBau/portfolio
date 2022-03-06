import React from "react";
import WorkListHome from "./WorkListHome";
const Home = () => {
  return (
    <div className="home-page-wrapper">
    <section id="intro">
      <div className="mainBox gradient">
        <div className="mainBox-inside">

                <h2 className="mainBox-intro">
                    Hi, thanks for visiting my site! <br/>
                    I’m <span>Anderson</span><br/>
                    a fullstack Web <span>Developer</span>  <br/>
                    based <br/>
                    in New York City.
                </h2>
            <div className="mainBox-down">
                <div className="mainBox-botton">
                    <a href="/work">
                        <img src="/img/view work-white.png" alt="" className="mainBox-boton-text"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
  </section>
<div className="gradient-divider">
    <p className="gradient-text">

    </p>
</div>
<section id="thingsMade">

    <h2 className="thingsMade-title">Things I've made</h2>
    <WorkListHome/>


</section>

<section id="process">
    <div className="process-container">
     <h2 className="process-title">The Process</h2>


        <div className="process-steps">
            <h3 className="process-subtitles">Plan</h3>

            <div className="process-img">
                <img src="img/plan.png" className="process-img-size"/>
            </div>

            <p className="process-text">
                Whether you need a website
                from scratch or redesign your
                current site we will talk and
                create a clear goal so we can
                develop a plan that fits your vision.
            </p>


        </div>


        <div className="process-steps">
            <h3 className="process-subtitles">Design</h3>

            <div className="process-img">
                <img src="img/design.png" className="process-img-size"/>
            </div>

            <p className="process-text">
                After gathering all the information and
                with all the guidelines in place we begin the design
                process create prototypes and sketches.
            </p>
        </div>

        <div className="process-steps">
            <h3 className="process-subtitles">Develop</h3>

            <div className="process-img">
                <img src="img/code.png" className="process-img-size"/>
            </div>

            <p className="process-text">
                After approval we are ready to hit the keys!
                we begin the development
                process and create a powerful
                website.
            </p>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home;
