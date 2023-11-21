import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppThemeProvider = ({ children }) => {
  // !neues theme kontext für darkmode

  const [theme, setTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
