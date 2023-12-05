import React, { createContext, useReducer, useEffect } from "react";
export const themeContext = createContext();
const initialState = { darkMode: false };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  // Check if the dark mode preference is stored in local storage
  const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

  // Set the initial state based on the stored preference or the default value
  const [state, dispatch] = useReducer(themeReducer, {
    darkMode: storedDarkMode !== null ? storedDarkMode : initialState.darkMode,
  });

  // Update local storage whenever the dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
