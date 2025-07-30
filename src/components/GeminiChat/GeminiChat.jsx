import { useState } from "react";
import "./GeminiChat.css";
import { assets } from "../../assets/assets";

export default function GeminiChat() {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="GeminiChat">
      <div className="topContainer">
        <div>
          <h1>Gemini</h1>
          <div className="model">
            <span>2.5 Pro</span> <img src={assets.down} alt="Down arrow" />
          </div>
        </div>

        <img className="profilePic" src={assets.user} alt="Gemini Account" />
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
              placeholder="Ask Gemini"
              onChange={onChangeHandler}
              value={input}
            />

            <div
              style={input ? { backgroundColor: "#e4e8ed" } : null}
              className="buttons"
            >
              {input ? (
                <img src={assets.send} alt="Submit" title="Submit" />
              ) : (
                <img src={assets.mic} alt="Microphone" title="Use microphone" />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
