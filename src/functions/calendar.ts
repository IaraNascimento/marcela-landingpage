import { restError } from "./helpers";

export const createEvent = async () => {
  try {
    // const request = gapi.client.calendar.events.insert({
    //   'calendarId': 'primary',
    //   'resource': event
    // });

    // request.execute(function(event) {
    //   appendPre('Event created: ' + event.htmlLink);
    // });

    const res = { data: "oi" };

    console.log("Event created:", res?.data);
    return res?.data;
  } catch (error) {
    restError(error as string);
    throw new Error("Failed to create event");
  }
};
