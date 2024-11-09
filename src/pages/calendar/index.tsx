import "./styles.scss";
import CalendarComponent from "../../components/calendar/calendar";
import ScheduleComponent from "../../components/schedule/schedule";

export default function Calendar() {
  return (
    <>
      <ScheduleComponent />
      <br />
      <CalendarComponent />
    </>
  );
}
