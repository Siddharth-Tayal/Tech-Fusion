import React from "react";
import TimelinePage from "./Timeline";

const CulturalEvents = () => {
  const CulturalEvents = [
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Technical Quiz",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Technical Event",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "On the Spot coding",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Exhibition of Projects",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Logo Designing",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "AD Mad",
      eventType: "T",
    },
    {
      time: "11:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Startup Ideas",
      eventType: "T",
    },
    {
      time: "12:00 Am",
      date: "29 Feb",
      event: "Technical Event",
      name: "Android and Webapp Development",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "Group discussion",
      eventType: "T",
    },
    {
      time: "11:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "E-Sports",
      eventType: "T",
    },
    {
      time: "12:00 Am",
      date: "29 Feb",
      event: "Technical Event",
      name: "Earning By Learning",
      eventType: "T",
    },
    {
      time: "9:00 Am",
      date: "28 Feb",
      event: "Technical Event",
      name: "On the Spot coding",
      eventType: "T",
    },
  ];
  return <TimelinePage type={"Technical"} timelineData={CulturalEvents} />;
};

export default CulturalEvents;
