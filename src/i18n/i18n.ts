import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18nConfigurations } from "../configurations";

const {
  getResources,
  getDetection,
  getLanguages: { getFallbackLanguage, getAvailableLanguages },
} = i18nConfigurations;

const fallbackLanguage = getFallbackLanguage;
const availableLanguages = getAvailableLanguages;
const resources = getResources;
const detectionOptions = getDetection;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: fallbackLanguage,
    debug: true,
    whitelist: availableLanguages,
    detection: detectionOptions,
    resources: resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
