import React, { createContext, useContext, useState } from "react";
import LoadingPopup from "../components/Loaders/LoadingPopup";
import { PERIOD_MENU_OPTIONS } from "../constants";
import { CoinObjectType, PoolsContextType } from "../types/appContext";
import { ComponentWithChildProps } from "../types/common";
import { cryptos } from "../utils/cryptos";

const PoolsContext = createContext<PoolsContextType>({
  period: PERIOD_MENU_OPTIONS[0].value,
  changePeriod: () => {},
  primaryCoin: cryptos[7],
  secondaryCoin: cryptos[13],
  setPrimaryCoin: () => {},
  setSecondaryCoin: () => {},
});

export const PoolsContextProvider: React.FC<ComponentWithChildProps> = ({
  children,
}) => {
  const [period, setPeriod] = useState(PERIOD_MENU_OPTIONS[0].value);
  const [primaryCoin, setPrimaryCoin] = useState<CoinObjectType>(cryptos[7]);
  const [secondaryCoin, setSecondaryCoin] = useState<CoinObjectType>(
    cryptos[13]
  );

  const changePeriod = (val: string): void => {
    setPeriod(val);
  };

  return (
    <PoolsContext.Provider
      value={{
        period,
        changePeriod,
        primaryCoin,
        secondaryCoin,
        setPrimaryCoin,
        setSecondaryCoin,
      }}
    >
      {children}

      <LoadingPopup />
    </PoolsContext.Provider>
  );
};

export const usePoolsContext = () => useContext<PoolsContextType>(PoolsContext);
