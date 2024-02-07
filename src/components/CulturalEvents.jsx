import React from "react";
import TimelinePage from "./Timeline";

const CulturalEvents = () => {
  const CulturalEvents = [
    {
      time: "11:00 Am",
      date: "28 Feb",
      event: "Cultural Events",
      name: "Group Dance",
      eventType: "C",
    },
    {
      time: "12:00 Am",
      date: "29 Feb",
      event: "Cultural Event",
      name: "Solo Dance",
      eventType: "C",
    },
  ];
  return <TimelinePage type={"Cultural"} timelineData={CulturalEvents} />;
};

export default CulturalEvents;
