import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./translations/pt.json";
import en from "./translations/en.json";

export const resources = {
  pt: {
    name: "Português",
    key: "pt",
    translation: pt,
  },
  en: {
    name: "English",
    key: "en",
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
