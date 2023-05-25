import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showFeature,
        setShowFeature,
        showCompany,
        setShowCompany,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
