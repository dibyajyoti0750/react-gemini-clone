import { createContext, useState } from "react";
import { main } from "../gemini";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let [response, setResponse] = useState("");
  const [loader, setLoader] = useState(false);

  const contextValue = { main, response, setResponse, loader, setLoader };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
