import { createContext } from "react";
import { doctors } from "../fileassets/asset.js";

export const AppContex = createContext();

const AppContextProvider = (props) => {
  const curruncySymblo = "$";
  const value = {
    doctors,
    curruncySymblo,
  };
  return (
    <AppContex.Provider value={value}>{props.children}</AppContex.Provider>
  );
};
export default AppContextProvider;
