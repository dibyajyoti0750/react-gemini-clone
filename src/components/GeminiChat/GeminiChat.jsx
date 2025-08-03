import { useContext, useEffect, useRef, useState } from "react";
import "./GeminiChat.css";
import { assets } from "../../assets/assets";
import { MyContext } from "../../context/Context";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SkeletonLoader from "./SkeletonLoader";
import ReactMarkdown from "react-markdown";

export default function GeminiChat() {
  const bottomRef = useRef(null);

  const {
    main,
    input,
    setInput,
    query,
    setQuery,
    loader,
    setLoader,
    chatArr,
    setChatArr,
  } = useContext(MyContext);

  const getResponse = async () => {
    if (!input.trim()) return;

    let currInput = input;
    setQuery(currInput);
    setLoader(true);
    setInput("");

    const res = await main(currInput);
    setChatArr((prev) => [...prev, { question: currInput, answer: res }]);
    setLoader(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [query]);

  return (
    <div className="GeminiChat">
      <Navbar />

      <div
        className={
          loader || chatArr.some((chat) => chat.answer)
            ? "middleContainer startAlign"
            : "middleContainer centerAlign"
        }
      >
        {!query && !loader && chatArr.every((chat) => !chat.answer) && (
          <div className="greet">
            <h1>Hello, Dibyajyoti</h1>
          </div>
        )}

        {chatArr &&
          chatArr
            .filter((chat) => chat.question && chat.answer)
            .map((chat, idx) => (
              <div key={idx} className="queryAndResponse">
                <div
                  className="query"
                  style={chat.question.length > 30 ? { width: "25rem" } : null}
                >
                  <p>{chat.question}</p>
                </div>

                <div className="response">
                  <ReactMarkdown>{chat.answer}</ReactMarkdown>
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

        {query && loader && <SkeletonLoader />}
        <div ref={bottomRef}></div>
      </div>

      <div className="bottomContainer">
        <div className="chatBox">
          <form
            onSubmit={(e) => {
              e.preventDefault();
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
              onClick={getResponse}
              style={input ? { backgroundColor: "#e4e8ed" } : null}
              className="buttons"
              title={input ? "Submit" : "Use microphone"}
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
