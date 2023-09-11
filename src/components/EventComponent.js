import React from "react";
import "../styles/eventbox.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
export default function EventComponent({
  title,
  batch,
  eventStatus,
  eventTime,
  eventDate,
}) {
  return (
    <div className="eventBox">
      <h4>{title}</h4>
      <div className="batchDisplay">{batch}</div>
      <span className="eventTime eventLog">
        <AiOutlineClockCircle />
        {eventTime}
      </span>
      <span className="eventDate eventLog">
        <BsCalendar3 />
        {eventDate}
      </span>
      <div className="eventStatus">{eventStatus}</div>
      <a href="#" className="joinEventBtn fillBtn">
        Join Now
      </a>
    </div>
  );
}
