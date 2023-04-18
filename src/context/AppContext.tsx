import React, { createContext, useContext, useState } from "react";
import LoadingPopup from "../components/Loaders/LoadingPopup";
import { ComponentWithChildProps } from "../types/common";
import { LoadingPopupData, AppContextType } from "../types/appContext";

const AppContext = createContext<AppContextType>({
  loadingPopup: null,
  closeLoadingPopup: () => {},
  setLoadingPopup: () => {},
});

export const AppContextProvider: React.FC<ComponentWithChildProps> = ({
  children,
}) => {
  const [loadingPopup, setLoadingPopup] = useState<LoadingPopupData | null>(
    null
  );

  const closeLoadingPopup = () => {
    setLoadingPopup(null);
  };

  return (
    <AppContext.Provider
      value={{
        loadingPopup,
        closeLoadingPopup,
        setLoadingPopup,
      }}
    >
      {children}

      {!!loadingPopup && <LoadingPopup />}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext<AppContextType>(AppContext);
