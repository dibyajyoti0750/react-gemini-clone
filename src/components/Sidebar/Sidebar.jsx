import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { MyContext } from "../../context/Context";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(true);
  const { chatArr, setChatArr, chatHistory, setChatHistory, setQuery } =
    useContext(MyContext);

  const setNewChat = () => {
    const questions = chatArr.map((chat) => chat.question).reverse();
    setChatHistory((prev) => [...questions, ...prev]);
    setChatArr([]);
    setQuery("");
  };

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
        <div onClick={setNewChat} title="New chat" className="newChat">
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
            {chatArr &&
              chatArr
                .slice() // makes a shallow copy, or else reverse will modify chatArr itself
                .reverse() // works on that copy
                .map((chat, idx) => (
                  <p key={idx} title={chat.question}>
                    {chat.question.slice(0, 20)}
                    {chat.question.length > 20 ? "..." : ""}
                  </p>
                ))}

            {chatHistory &&
              chatHistory.map((question, idx) => (
                <p key={idx} title={question}>
                  {question.slice(0, 20)}
                  {question.length > 20 ? "..." : ""}
                </p>
              ))}
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
