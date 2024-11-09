import "./styles.scss";
import { useTranslation } from "react-i18next";

export default function CalendarComponent() {
  const { i18n } = useTranslation();

  return (
    <iframe
      title="schedule-calendar"
      src={`https://calendar.google.com/calendar/embed?src=700a5078fce58af548d8d1a6fa50949196f3f4f99674ab85de842a7729ec66a2%40group.calendar.google.com&hl=${i18n.language}&mode=WEEK`}
    ></iframe>
  );
}
