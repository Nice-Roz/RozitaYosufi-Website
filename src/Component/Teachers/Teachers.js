import React from "react";
import "./Teachers.css";
import { teachersData } from "../../data/Data";
import { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Text from "../Text/Text";
import TeacherSocialsLinks from "./TeacherSocialsLinks";
import { useTranslation } from "react-i18next";
function Teachers({ review, status }) {
  const { t } = useTranslation();
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tlength = teachersData.length;
  return (
    <div className="teachers" id="Teachers">
      <div className="left-t">
        <Text text={"Teachers"} />
        <span className="stroke-text">{t("Whatthey")}</span>
        <span>{t("sayAboutMe")} </span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {t(`teachersData.${teachersData[selected].review}`)}
        </motion.span>
        <TeacherSocialsLinks
          kay={teachersData[selected].id}
          tlink={teachersData[selected].tlink}
          llink={teachersData[selected].llink}
        />
        <span>
          <span style={{ color: "var(--orange)" }}>
            {teachersData[selected].name}
          </span>{" "}
          - {teachersData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          className="img-t"
          src={teachersData[selected].image}
          alt=""
        />
        <div className="arrows">
          <BiArrowToRight
            className="icon-arrow"
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <BiArrowToLeft
            className="icon-arrow"
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Teachers;
