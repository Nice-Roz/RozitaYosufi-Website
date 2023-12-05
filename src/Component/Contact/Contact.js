import React from "react";
import "./contact.css";
import FooterText from "./FooterText/FooterText";
// translation
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-flex">
            <FooterText text="Email : rozitayousufi786@gmail.com" />
            <FooterText text="Phone : (93)744587407" />
            <p>
              &copy; {currentYear} {t("contact-p")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
