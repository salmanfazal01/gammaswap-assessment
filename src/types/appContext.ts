export interface LoadingPopupData {
  title: string;
  message: string;
}
export interface CoinObjectType {
  symbol: string;
  image: string;
}

export interface AppContextType {
  loadingPopup: LoadingPopupData | null;
  closeLoadingPopup: () => void;
  setLoadingPopup: (loading: LoadingPopupData | null) => void;
}

export interface PoolsContextType {
  period: string;
  changePeriod: (val: string) => void;
  primaryCoin: CoinObjectType;
  secondaryCoin: CoinObjectType;
  setPrimaryCoin: (coin: CoinObjectType) => void;
  setSecondaryCoin: (coin: CoinObjectType) => void;
}
