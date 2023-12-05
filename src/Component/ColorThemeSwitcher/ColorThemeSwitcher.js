import React, { useEffect, useState } from "react";
import { themes } from "../../data/Data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import "./ColorThemeSwitcher.css";
import "../../App.css";
// Useing the localStorage of user computer to store the recent action with portfilio like color , background ...

// The `getStorageColor` function retrieves the color value stored in the localStorage.
// If there is no color value stored, it returns a default color value of 'hsl(42, 100%, 50%)'.
// If a color value is found in the localStorage, it returns that value.
const getStorageColor = () => {
  let color = "hsl(42, 100%, 50%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};
const getStorageBackground = () => {
  let background = "var(--background-limon)";
  if (localStorage.getItem("background")) {
    background = localStorage.getItem("background");
  }
  return background;
};
const getStorageBoxShadow = () => {
  let shadow = "var(--box-shadow-limon)";
  if (localStorage.getItem("shadow")) {
    shadow = localStorage.getItem("shadow");
  }
  return shadow;
};

const ColorThemeSwitcher = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor);
  const [background, setBackground] = useState(getStorageBackground);
  const [shadow, setShadow] = useState(getStorageBoxShadow);
  const changeColor = (color) => {
    setColor(color);
  };
  const changeBackground = (background) => {
    setBackground(background);
  };
  const changeShadow = (shadow) => {
    setShadow(shadow);
  };
  // This useEffect hook sets the value of the --orange CSS variable to the value of
  // the 'color' variable and then stores the 'color' variable in the localStorage.
  //  The useEffect hook will be triggered whenever the 'color' variable changes.
  useEffect(() => {
    document.documentElement.style.setProperty("--orange", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.style.setProperty("--background", background);
    localStorage.setItem("background", background);
  }, [background]);

  useEffect(() => {
    document.documentElement.style.setProperty("--box-shadow", shadow);
    localStorage.setItem("shadow", shadow);
  }, [shadow]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>
        <h4 className="style__switcher-title">Style Switcher</h4>
        <div className="style__switcher-item">
          {themes.map((theme, index) => {
            return (
              <ThemeItem
                key={index}
                {...theme}
                changeShadow={changeShadow}
                changeColor={changeColor}
                changeBackground={changeBackground}
              />
            );
          })}
        </div>
        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};
export default ColorThemeSwitcher;
