export interface LoadingPopupData {
  title: string;
  message: string;
}

export interface AppContextType {
  loadingPopup: LoadingPopupData | null;
  closeLoadingPopup: () => void;
  setLoadingPopup: (loading: LoadingPopupData | null) => void;
}
