import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const TeacherSocialsLinks = ({ id, tlink, llink }) => {
  return (
    <>
      <span>
        <a href={tlink}>
          <FaSquareXTwitter id={id} className="home__social-link" />
        </a>
        <a href={llink}>
          <CiLinkedin id={id} className="home__social-link" />
        </a>
      </span>
    </>
  );
};

export default TeacherSocialsLinks;
