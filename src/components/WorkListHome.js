import React from "react";

const WorkListHome = () => {
  return (
    <div className="work-container">

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">the Super<br /> <span>Store</span></h2>
          <p>Shopping cart team project for Fullstack Academy.</p><br />
          <h4>Technologies</h4>
          <p>React, Redux, Express, Node.<br />Database management PostgreSQL with Sequelize as ORM.</p>
          <p className="view-project">
            <a href="https://github.com/AndersBau/graceshopperproject" target="_blank" rel="noreferrer">view code on github > </a>
          </p>
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
          <p>Freelancer finder website</p>
          <p>Created as a group for Fullstack Academy.</p><br />
          <h4>Technologies</h4>
          <p>React, react hooks.<br /> Database management with firestore.</p>
          <p className="view-project">
            <a href="https://github.com/AndersBau/GeekHunt" target="_blank" rel="noreferrer">view code on github > </a>
          </p>
          <p className="view-project">
            <a href="https://geek-hunt.web.app/landing" target="_blank" rel="noreferrer">view live project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-2">
        </div>
      </div>

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">Megafruver<br /> <span></span></h2>
        <p>Produce Store</p>
          <p>Megafruver is a local supermarket located in Bucaramanga, Colombia.</p><br />
          <h4>Technologies</h4>
          <p>HTML, CSS, JavaScript.</p>
          <p className="view-project">
            <a href="https://github.com/AndersBau/megafruver" target="_blank" rel="noreferrer">view code on github > </a>
          </p>
          <p className="view-project">
            <a href="https://megafruver.org/" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-4">
        </div>
      </div>

      <div className="item">
        <div className="item_split-text">
        <h2 className="item-titles">Us Home<br /> <span>Services</span></h2>
          <p>Multiservice Agengy</p>
          <p>US home services is a multi-service agency that offer help and guidance on legal needs.</p><br />
          <h4>Technologies</h4>
          <p>HTML, CSS, JavaScript.</p>
          <p className="view-project">
            <a href="https://ushomeservices.net/index.html" target="_blank" rel="noreferrer">View Project > </a>
          </p>
        </div>
        <div className="item_split-image bgItem-3">
        </div>
      </div>
    </div>
  );
};

export default WorkListHome;
