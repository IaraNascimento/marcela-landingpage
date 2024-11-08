import "./styles.scss";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return <h1>{t("notfound.title")}</h1>;
}
