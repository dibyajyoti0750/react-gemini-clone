import { createContext, useState } from "react";
import { main } from "../gemini";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [chatArr, setChatArr] = useState([]);
  const [loader, setLoader] = useState(false);

  const contextValue = {
    main,
    chatArr,
    setChatArr,
    loader,
    setLoader,
    input,
    setInput,
    query,
    setQuery,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
