import { React, useRef, useState } from "react";
import "./contact.css";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import Text from "../Text/Text";
import {useTranslation} from 'react-i18next';

function FormContact() {
  const {t} = useTranslation();
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9cga37e",
        "template_1erehpq",
        form.current,
        "l-ftJmMCIvyBvzLx3",
       
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
       
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form" id="Contact">
        <div className="w-left">
          <Map />
        </div>

        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <Text text={t('Message Me')} />
          
            <input
              type="text"
              name="user-namme"
              className="user"
              placeholder={t("Name")}
            />
            <input
              type="email"
              name="user-email"
              className="user"
              placeholder={t("Email")}
            />
            <textarea name="message" className="user" placeholder={t("Message")} />
            <input type="submit" value={t("Send")} className="button" />
            <span>{done && "Thanks for your message :) "}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--orange)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContact;
