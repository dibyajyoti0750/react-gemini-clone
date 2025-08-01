import { createContext, useState } from "react";
import { main } from "../gemini";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [response, setResponse] = useState("");
  const [chatArr, setChatArr] = useState([]);
  const [loader, setLoader] = useState(false);

  const contextValue = {
    main,
    response,
    setResponse,
    chatArr,
    setChatArr,
    loader,
    setLoader,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
