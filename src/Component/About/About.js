import React, { Fragment, useState } from "react";
import "./About.css";
import "../../App.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import resume from "./Rozita.resume.pdf";
import ButtonHobby from "./Button-hobby";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Fragment>
      <section className="about" id="About">
        <div className="row">
          <div className="column right">
            <motion.div
              className="about-img"
              initial={{ left: "-8rem" }}
              whileInView={{ left: "3%" }}
              transition={transition}
            ></motion.div>
          </div>
          <div className="column left">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>{t("about")}</h2>
              </div>
              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>{t("skills")}</h2>
              </div>
              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>{t("hobbie")}</h2>
              </div>
            </div>

            <div className="tab-context">
              {/* About context */}
              <div
                className={
                  toggleTab === 1 ? "context active-context" : "context"
                }
              >
                <h2>{t("myStory")}</h2>
                <p>
                  {t("iAm")}{" "}
                  <span style={{ color: "var(--orange" }}> Rozita Yosufi </span>
                  {t("about-p")}
                </p>
                <div className="wrap">
                  <a
                    className="wrap-button"
                    href={resume}
                    download="Rozita-resume.pdf"
                  >
                    {" "}
                    {t("resume")}{" "}
                  </a>
                </div>
              </div>
              {/* Skills context */}
              <div
                className={
                  toggleTab === 2 ? "context active-context" : "context"
                }
              >
                <div className="skill-row">
                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>HTML</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar HTML">
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>CSS</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar CSS">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>BOOTSTRAP</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar BOOTSTRAP">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>Javscript</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar Javscript">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>React</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar REACT">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-column">
                    <div className="progress-wrap">
                      <h3>PhotoShop</h3>
                      <div
                        className="progress"
                        style={{ background: darkMode ? "white" : "" }}
                      >
                        <div className="progress-bar PhotoShop">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hobby context */}
              <div
                className={
                  toggleTab === 3 ? "context active-context" : "context"
                }
              >
                <div>
                  <ButtonHobby />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default About;
