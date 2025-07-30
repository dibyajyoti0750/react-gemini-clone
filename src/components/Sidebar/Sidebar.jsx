import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className={`Sidebar ${collapse ? "collapsed" : ""}`}>
      <div className="top">
        <div className="icon-container">
          <img
            onClick={() => setCollapse((prev) => !prev)}
            title={collapse ? "Expand menu" : "Collapse menu"}
            src={assets.menu}
            alt="menu-icon"
          />
        </div>
        {!collapse ? (
          <div className="icon-container">
            <img title="Search" src={assets.search} alt="search-icon" />
          </div>
        ) : null}
      </div>

      <div onMouseEnter={() => setCollapse(false)} className="secondary">
        <div title="New chat" className="newChat">
          <img src={assets.newChat} alt="New chat" />
          {!collapse ? <p>New chat</p> : null}
        </div>

        {!collapse ? (
          <div title="Explore Gems" className="exploreGems">
            <img src={assets.gem} alt="Explore Gems" />
            <p>Explore Gems</p>
          </div>
        ) : null}
      </div>

      {!collapse ? (
        <div onMouseEnter={() => setCollapse(false)} className="recent">
          <div className="recentTitle">Recent</div>

          <div className="recentChats">
            <p title="Docker: Containerization Explanation">
              Docker: Containerization Ex...
            </p>
            <p title="Describe this image as a prompt">
              Describe this image as a pr...
            </p>
          </div>
        </div>
      ) : null}

      <div
        onMouseEnter={() => setCollapse(false)}
        title="Settings and help"
        className="bottom"
      >
        <img src={assets.settings} alt="Settings and help" />
        {!collapse ? <p>Settings and help</p> : null}
      </div>
    </div>
  );
}
