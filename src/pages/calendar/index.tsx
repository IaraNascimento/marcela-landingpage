import "./styles.scss";
import ScheduleCalendar from "../../components/calendar/calendar";
import { useTranslation } from "react-i18next";

export default function Calendar() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("calendar.title")}</h1>
      <ScheduleCalendar />
    </>
  );
}
