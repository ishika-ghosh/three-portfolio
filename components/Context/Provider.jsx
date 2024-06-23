"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext();
export const Provider = ({ children }) => {
  const [cardId, setCardId] = useState(null);
  return (
    <GlobalContext.Provider value={{ cardId, setCardId }}>
      {children}
    </GlobalContext.Provider>
  );
};
