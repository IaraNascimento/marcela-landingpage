import "./styles.scss";
import { useTranslation } from "react-i18next";
import { resources } from "../../i18n";
import { useEffect, useState } from "react";

export default function Translation() {
  const localStorageLangKey = "language";
  const languages = Object.values(resources);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("");

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const langKey: string = event.target.value;
    setLang(langKey);
  }

  useEffect(() => {
    if (lang) {
      localStorage.setItem(localStorageLangKey, lang);
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    let initialLang = localStorage.getItem(localStorageLangKey);
    if (!initialLang) {
      initialLang = languages[0].key;
    }
    setLang(initialLang);
  }, []);

  return (
    <select onChange={handleLanguageChange} value={lang}>
      {languages?.map((item, index) => (
        <option key={index} value={item.key}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
