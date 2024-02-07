import React from "react";
import TimelinePage from "./Timeline";

const SportsEvents = () => {
  const SportsEvents = [
    {
      time: "11:00 Am",
      date: "28 Feb",
      event: "Sports Events",
      name: "Badminton",
      eventType: "S",
    },
    {
      time: "12:00 Am",
      date: "29 Feb",
      event: "Sports Event",
      name: "Table Tennis",
      eventType: "S",
    },
  ];
  return <TimelinePage type={"Sports"} timelineData={SportsEvents} />;
};

export default SportsEvents;
