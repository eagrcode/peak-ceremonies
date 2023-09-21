"use client";

import { createContext, useContext, useState } from "react";

export const IsMenuOpenContext = createContext();
export const useIsMenuOpenContext = () => useContext(IsMenuOpenContext);

export const IsMenuOpenContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IsMenuOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsMenuOpenContext.Provider>
  );
};
