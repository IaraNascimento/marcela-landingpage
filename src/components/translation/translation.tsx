import "./styles.scss";
import { useTranslation } from "react-i18next";
import { resources } from "../../i18n";

export default function Tranlation() {
  const languages = Object.values(resources);
  const { i18n } = useTranslation();

  return (
    <>
      <select
        onChange={(val) => i18n.changeLanguage(val.target.value.toString())}
        defaultValue={i18n.language}
      >
        {languages?.map((lang, index) => (
          <option key={index} value={lang.key}>
            {lang.name}
          </option>
        ))}
      </select>
    </>
  );
}
