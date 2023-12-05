import React, { useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { BsList } from "react-icons/bs";
import { themeContext } from "../../Context";
import { useContext } from "react";
import flowerlogo from "../../img/r1.webp";
// translation
import Languageoption from "./language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const [ShowMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="navbar"
        id="Navbar"
        style={{ background: darkMode ? "black" : "" }}
      >
        <div className="navbar-left">
          <div className="navbar-name">
            <img src={flowerlogo} alt="" />
          </div>
          <Toggle />
          <Languageoption onChange={(e) => handleClick(e)} />
        </div>
        <div className="navbar-right">
          <div className="bars" onClick={ToggleMenu}>
            <BsList />
          </div>

          <div
            className="navbar-list"
            style={{ display: ShowMenu ? "inherit" : "none" }}
          >
            <ul style={{ listStyleType: "none" }} className="navbar-ul">
              <Link
                className="navbar-item"
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
              >
                <li>{t("home")}</li>
              </Link>
              <Link className="navbar-item" spy={true} to="About" smooth={true}>
                <li>{t("about")}</li>{" "}
              </Link>
              <Link
                className="navbar-item"
                spy={true}
                to="Education"
                smooth={true}
              >
                <li>{t("education")}</li>
              </Link>
              <Link
                className="navbar-item"
                spy={true}
                to="Project"
                smooth={true}
              >
                <li>{t("project")}</li>
              </Link>
              <Link
                className="navbar-item"
                spy={true}
                to="Teachers"
                smooth={true}
              >
                <li>{t("teachers")}</li>
              </Link>

              <Link
                className="navbar-item nav-item-hide"
                spy={true}
                to="Contact"
                smooth={true}
              >
                <li>{t("contact")}</li>
              </Link>
            </ul>
            <Link className="navbar-item" spy={true} to="Contact" smooth={true}>
              <button className="button navbar-button">{t("contact")}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
