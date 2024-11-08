import { useTranslation } from "react-i18next";
import "./styles.scss";

export default function Home() {
  const { t } = useTranslation();

  return <h1>{t("home.title")}</h1>;
}
