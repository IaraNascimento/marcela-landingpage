import "./styles.scss";
import { createEvent } from "../../functions/calendar";
import { useState } from "react";
import { restError } from "../../functions/helpers";

const calendarId =
  "700a5078fce58af548d8d1a6fa50949196f3f4f99674ab85de842a7729ec66a2@group.calendar.google.com";
const serviceAccountEmail =
  "aulas-de-canto-prof-marcela@aulas-marcela.iam.gserviceaccount.com";

interface ScheduleFormParams {
  setscheduling: (val: "todo" | "doing" | "done") => void;
}

export default function ScheduleForm({ setscheduling }: ScheduleFormParams) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventStart = new Date(`${eventDate}T${eventTime}`);
    const eventEnd = new Date(eventStart);
    eventEnd.setHours(eventStart.getHours() + 1);

    const event = {
      summary: eventName,
      start: {
        dateTime: eventStart.toISOString(),
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: eventEnd.toISOString(),
        timeZone: "America/Sao_Paulo",
      },
    };

    try {
      const response = await createEvent();
      console.log(response);

      if (!!response) {
        setscheduling("done");
        alert("Evento criado com sucesso no Google Calendar!");
      } else {
        restError("erro");
      }
    } catch (error) {
      restError(error as string);
    }
  };

  return (
    <form onSubmit={handleCreateEvent}>
      <div>
        <label>Nome do Evento:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data do Evento:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Horário do Evento:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agendar Evento</button>
    </form>
  );
}
