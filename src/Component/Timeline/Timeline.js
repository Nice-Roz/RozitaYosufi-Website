import React, { useEffect } from "react";
import "./Timeline.css";
import { BiSolidSchool } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }

    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []); // Empty dependency array ensures that the effect runs only once
  return (
    <div className="text-margin" id="Education">
      <section className="timeline">
        <div className="Education-title">
          <Text text={"My Education"} />
          <hr />
        </div>
        <ul>
          <li>
            <div>
              <time>2008</time>
              <div
                className="discovery"
                style={{ background: darkMode ? "black" : "" }}
              >
                <h3>
                  <i>
                    <BiSolidSchool className="icon" />
                  </i>
                  {t("school")}
                </h3>
                <span>2008-2020</span>
              </div>
              <div
                className="term"
                style={{ background: darkMode ? "black" : "" }}
              >
                <span>Hatifi-High {t("school")}</span>
                <h5>Herat Afghanistan</h5>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2021</time>
              <div
                className="discovery"
                style={{ background: darkMode ? "black" : "" }}
              >
                <h3>
                  <i>
                    <FaUniversity className="icon" />
                  </i>
                  {t("university")}
                </h3>
                <span>2021-{t("time-e")}</span>
              </div>
              <div
                className="term"
                style={{ background: darkMode ? "black" : "" }}
              >
                <span>{t("name-u")}</span>
                <h5>Herat Afghanistan</h5>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>2023</time>
              <div
                className="discovery"
                style={{ background: darkMode ? "black" : "" }}
              >
                <h3>{t("programing")}</h3>
                <span>2023-{t("time-e")}</span>
              </div>
              <div
                className="term"
                style={{ background: darkMode ? "black" : "" }}
              >
                <span>{t("name-sub")}</span>
                <h5>Code To Inspire</h5>
              </div>
            </div>
          </li>

          <li></li>
        </ul>
      </section>
    </div>
  );
}
export default Timeline;
