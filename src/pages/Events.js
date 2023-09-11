import React from "react";
import Sidebar from "../components/Sidebar";
import EventComponent from "../components/EventComponent";
import { HiSearch } from "react-icons/hi";
import { Header } from "./Dashboard";
import "../styles/events.css";
const eventArray = [
  {
    id: 1,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3CO - JVY",
    eventStatus: "Ongoing",
    eventTime: "12:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 2,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 3,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 4,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 5,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 6,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 7,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 8,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
  {
    id: 9,
    title: "How to Make an Array and it’s Types in C++",
    batch: "Batch 3MY - JVY",
    eventStatus: "Status : Starting in 60 Minutes",
    eventTime: "1:40 P:M",
    eventDate: "03 Jan 2023",
  },
];
const EventsGrid = () => {
  return (
    <div className="eventsGrid">
      {eventArray.map((item) => {
        return <EventComponent key={item.id} {...item} />;
      })}
    </div>
  );
};
function Events() {
  return (
    <>
      <Sidebar />
      <div className="eventsCont escapeSidebar">
        <Header />
        <header className="eventsHead">
          <h4>Upcoming Events</h4>
          <div className="eventsTopBar">
            <h5>Scheduled Classes</h5>
            <div className="eventsSearch">
              <HiSearch />
              <input
                type="search"
                name="searchEvents"
                id="searchEvents"
                placeholder="Search.."
              />
            </div>
          </div>
        </header>
        <EventsGrid />
      </div>
    </>
  );
}
export default Events;
