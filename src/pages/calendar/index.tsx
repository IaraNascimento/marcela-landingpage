import { useTranslation } from "react-i18next";
import "./styles.scss";

export default function Calendar() {
  const { t } = useTranslation();

  return <h1>{t("calendar.title")}</h1>;
}
