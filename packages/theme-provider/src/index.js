import React, { useContext } from 'react';

export const ThemeContext = React.createContext({
  theme: {},
});

export const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
