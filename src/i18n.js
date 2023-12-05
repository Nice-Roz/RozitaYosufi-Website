import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["tr", "en", "gr"];
const option = {
  order: ["navigator", "htmlTag", "path", "subdomail"],
  checkWhitelist: true,
};
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    whitelist: availableLanguages,
    detection: option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
// Get the user's preferred language from localStorage
const language = localStorage.getItem("language");

// If the user has a language preference, set it as the default language
if (language) {
  i18n.changeLanguage(language);
}

// When the user changes their language preference, update localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
