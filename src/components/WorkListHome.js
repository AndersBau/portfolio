import React from "react";

const WorkListHome = () => {
  return (
    <div className="work-container">
      <div className="item bgushome">
        <div className="item-top-text">
          <h2>Us Home Services</h2>
          <p>Multiservice Agengy</p>
        </div>
        <div className="item-bottom-text">
          <p>Web Design & Development</p>
          <p>
            <a href="/projects/ushomeservices">View Project</a>
          </p>
        </div>
      </div>
      <div className="item bgmegafruver">
        <div className="item-top-text">
          <h2>Megafruver</h2>
          <p>Supermarket</p>
        </div>
        <div className="item-bottom-text">
          <p>Design and development</p>
          <p>
            <a href="/projects/megafruver">View Project</a>
          </p>
        </div>
      </div>

      <div className="item bgwoodsidevision">
        <div className="item-top-text">
          <h2>Woodside Vision</h2>
          <p>Optical</p>
        </div>

        <div className="item-bottom-text">
          <p>Web Design</p>
          <p>
            <a href="/projects/woodsidevision">View Project</a>
          </p>
        </div>
      </div>


    </div>
  );
};

export default WorkListHome;
