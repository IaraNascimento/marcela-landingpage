import "./styles.scss";
import { useEffect, useState } from "react";
import ScheduleForm from "./schedule-form";
import ScheduleSuccess from "./schedule-success";

export default function ScheduleComponent() {
  const localStorageSchedulingKey = "scheduling";
  const [scheduling, setscheduling] = useState<"todo" | "doing" | "done">();

  useEffect(() => {
    if (scheduling) {
      localStorage.setItem(localStorageSchedulingKey, scheduling);
    }
  }, [scheduling]);

  useEffect(() => {
    let initial = localStorage.getItem(localStorageSchedulingKey) as
      | "todo"
      | "doing"
      | "done";
    if (!initial || initial === "done") {
      initial = "todo";
    }
    setscheduling(initial);
  }, []);

  return (
    <div>
      {scheduling === "todo" ? (
        <button onClick={() => setscheduling("doing")}>
          Quero fazer uma aula teste!
        </button>
      ) : scheduling === "doing" ? (
        <ScheduleForm setscheduling={setscheduling} />
      ) : (
        scheduling === "done" && (
          <ScheduleSuccess setscheduling={setscheduling} />
        )
      )}
    </div>
  );
}
