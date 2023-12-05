import React from "react";
import "./Portfilio.css";
import "../../App.css";
import Text from "../Text/Text";
import HeaderSocials from "./HeaderSocials";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../../img/computer1.jpg";
import talking from "../../img/Talking.png";
import abrTop from "../../img/abr-top.png";

import { useTranslation } from "react-i18next";

const Portfilio = () => {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: [
      t("fron-End-developer"),
      t("designer"),
      t("self-Studier"),
      t("photographer"),
    ],
    loop: {},
  });

  return (
    <>
      <section className="home home-container" id="Home">
        <div className="container-talking">
          <div className="talking">
            <img src={talking} alt="" />
          </div>
          <div className="queto">
            <img src={abrTop} alt="" />
            <h4 className="home__education">
              {t("hi")}{" "}
              <span>
                <Text text={"Rozita Yosufi"} />
              </span>{" "}
              {t("a")}
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--orange)",
                  marginLeft: "5px",
                }}
              >
                {" "}
                {text}{" "}
              </span>
              <span style={{ color: "var(--orange)" }}>
                <Cursor />
              </span>
            </h4>
          </div>
        </div>
        <div className="intro">
          <img src={profile} alt="" className="home__img" />
        </div>
        <div className="social-link">
          <div className="square"></div>
          <HeaderSocials />
        </div>
      </section>
    </>
  );
};
export default Portfilio;
