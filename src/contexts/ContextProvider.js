import React, { createContext, useContext, useState } from "react";
///craeting a new context
const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

///wraps all other component in my app to provide them with the data and functions stored in context
///The children prop in React is a special prop that is automatically passed to a component when it is used to wrap other components
///It represents the content or components that are nested inside the ContextProvider component when it is used in the component
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(null);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSetting, setThemeSetting] = useState(false);

  const setMode = (e) => {
    ///setters function
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSetting(false);
  };

  const setColor = (color) => {
    ///setters function
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    setThemeSetting(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    //created my provider//
    <StateContext.Provider ///wrapping child components
      value={{
        ///sets up the data and functions that will be accessible to child components via the context
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,

        currentMode,
        themeSetting,
        setThemeSetting,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
//using the activeMenu inside our app component
export const useStateContext = () => useContext(StateContext);

////useStateContext is a custom hook that allows components to access the context's data and functions using the useContext hook.
