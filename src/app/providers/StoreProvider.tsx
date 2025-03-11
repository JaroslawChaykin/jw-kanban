import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { mainStore } from "../store/mainStore";

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};
