import { useState } from "react";
import "./GeminiChat.css";
import { assets } from "../../assets/assets";

export default function GeminiChat() {
  const [input, setInput] = useState("");

  return (
    <div className="GeminiChat">
      <div className="topContainer">
        <h1>Gemini</h1>
        <div className="model">
          <span>2.5 Pro</span> <img src={assets.down} alt="Down arrow" />
        </div>
      </div>

      <div className="middleContainer">
        <div className="greet">
          <h1>Hello, Dibyajyoti</h1>
        </div>
      </div>

      <div className="bottomContainer">
        <div className="chatBox">
          <form>
            <input
              type="text"
              placeholder="Ask Gemini"
              onChange={(e) => {
                setInput(e.target.value);
                console.log(e.target.value);
              }}
            />
            <div title="Submit" className="submit">
              <img src={assets.send} alt="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
