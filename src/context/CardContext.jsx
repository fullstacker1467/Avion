import React, { createContext, useState } from "react";

export const useCard = createContext([]);

const CardContext = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <useCard.Provider value={{data, setData }}>{children}</useCard.Provider>
  );
};

export default CardContext;
