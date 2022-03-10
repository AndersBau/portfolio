import React from "react";

const WorkListHome = () => {
  return (
    <div className="work-container">

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">the Super<br /> <span>Store</span></h2>
          <p>Multiservice Agengy</p>
          <p>Web Design & Development</p>
          <p className="view-project">
            <a href="https://the-super-store.herokuapp.com/home" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-1">
        </div>
      </div>

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">Geek<br /> <span>Hunt</span></h2>
          <p>Multiservice Agengy</p>
          <p>Web Design & Development</p>
          <p className="view-project">
            <a href="https://geek-hunt.web.app/landing" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-2">
        </div>
      </div>

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">Us Home<br /> <span>Services</span></h2>
          <p>Multiservice Agengy</p>
          <p>Web Design & Development</p>
          <p className="view-project">
            <a href="https://ushomeservices.net/index.html" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-3">
        </div>
      </div>

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">Megafruver<br /> <span></span></h2>
          <p>Multiservice Agengy</p>
          <p>Web Design & Development</p>
          <p className="view-project">
            <a href="https://megafruver.org/" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-4">
        </div>
      </div>
    </div>
  );
};

export default WorkListHome;
