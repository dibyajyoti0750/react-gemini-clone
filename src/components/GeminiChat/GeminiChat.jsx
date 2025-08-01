import { useContext, useEffect, useState } from "react";
import "./GeminiChat.css";
import { assets } from "../../assets/assets";
import { MyContext } from "../../context/Context";
import Loader from "./Loader";

export default function GeminiChat() {
  const {
    main,
    response,
    setResponse,
    loader,
    setLoader,
    chatArr,
    setChatArr,
  } = useContext(MyContext);

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const getResponse = async () => {
    let currInput = input;

    setQuery(currInput);
    setLoader(true);
    setInput("");
    setResponse("");

    const res = await main(currInput);
    setResponse(res);

    setChatArr((prev) => [...prev, { question: currInput, answer: res }]);

    setLoader(false);
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

      <div
        className={
          loader || response
            ? "middleContainer startAlign"
            : "middleContainer centerAlign"
        }
      >
        {!query && !loader && !response && (
          <div className="greet">
            <h1>Hello, Dibyajyoti</h1>
          </div>
        )}

        {chatArr &&
          chatArr.map((chat, idx) => (
            <div key={idx} className="queryAndResponse">
              <div className="query">
                <p>{chat.question}</p>
              </div>

              <div className="response">
                <p>{chat.answer}</p>
              </div>
            </div>
          ))}

        {query && loader && (
          <div className="queryAndLoader">
            <div>
              <Loader />
            </div>

            <div className="query">
              <p>{query}</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottomContainer">
        <div className="chatBox">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim()) return;
            }}
          >
            <input
              placeholder="Ask Gemini"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />

            <div
              style={input ? { backgroundColor: "#e4e8ed" } : null}
              className="buttons"
            >
              {input ? (
                <img
                  onClick={getResponse}
                  src={assets.send}
                  alt="Submit"
                  title="Submit"
                />
              ) : (
                <img src={assets.mic} alt="Microphone" title="Use microphone" />
              )}
            </div>
          </form>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          margin: "0.7rem",
          fontSize: "0.7rem",
          color: "#575b5f",
        }}
      >
        Gemini can make mistakes, so double-check it
      </p>
    </div>
  );
}
