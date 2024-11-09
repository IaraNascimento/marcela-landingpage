import "./styles.scss";

interface ScheduleSuccessParams {
  setscheduling: (val: "todo" | "doing" | "done") => void;
}

export default function ScheduleSuccess({
  setscheduling,
}: ScheduleSuccessParams) {
  return (
    <div>
      <h1>Legal! Você agendou uma aula!</h1>
      <button onClick={() => setscheduling("doing")}>Agendar novamente!</button>
    </div>
  );
}
