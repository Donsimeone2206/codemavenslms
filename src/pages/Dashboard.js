import React from "react";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EventComponent from "../components/EventComponent";
import TaskComponent from "../components/TaskComponent";
import { ProfileSideBar } from "../components/ProfileBar";
const dashEventArray = [
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
];
const dashTaskArray = [
  {
    id: 1,
    taskTitle:
      "Add a Quiz for Students of 3CO - JVY on the Subject Fundamentals of Programming",
    taskAssignedTime: "12:40 P:M",
    taskAssignedDate: "03 Jan 2023",
    taskDueTime: "03:40 P:M",
    taskDueDate: "03 Jan 2023",
    taskStatus: "Not Started",
    taskLink: "#",
  },
  {
    id: 2,
    taskTitle:
      "Add a Quiz for Students of 3CO - JVY on the Subject Fundamentals of Programming",
    taskAssignedTime: "12:40 P:M",
    taskAssignedDate: "03 Jan 2023",
    taskDueTime: "03:40 P:M",
    taskDueDate: "03 Jan 2023",
    taskStatus: "Not Started",
    taskLink: "#",
  },
  {
    id: 3,
    taskTitle:
      "Add a Quiz for Students of 3CO - JVY on the Subject Fundamentals of Programming",
    taskAssignedTime: "12:40 P:M",
    taskAssignedDate: "03 Jan 2023",
    taskDueTime: "03:40 P:M",
    taskDueDate: "03 Jan 2023",
    taskStatus: "Not Started",
    taskLink: "#",
  },
];
export const Header = () => {
  return (
    <div className="headerCont">
      <h2 className="welcomeText">Hi, Codemavens</h2>
      <div className="headerIcons">
        <div className="notifs">
          <IoNotificationsSharp />
        </div>
        <div className="userDropdown">
          <span className="userIcon">
            <BiSolidUserCircle size={30} />
          </span>
          <span className="downIcon">
            <RiArrowDropDownLine size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

const EventGrid = () => {
  return (
    <div className="eGridCont">
      <div className="headText">
        <h6>Upcoming Events</h6>
        <Link to="/student-events">
          View All <FaArrowUpRightFromSquare />
        </Link>
      </div>
      <div className="eGrid">
        {dashEventArray.map((item) => {
          return <EventComponent key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
const TaskGrid = () => {
  return (
    <div className="tGridCont">
      <div className="dashTaskHead">
        <h6>My Tasks</h6>
        <div className="dashTaskSort">
          <button className="dashTaskSorter">All</button>
          <button className="dashTaskSorter">Not Started</button>
          <button className="dashTaskSorter">Ongoing</button>
          <button className="dashTaskSorter">Completed</button>
          <button className="dashTaskSorter">Missed</button>
        </div>
      </div>
      <div className="tGrid">
        {dashTaskArray.map((item) => {
          return <TaskComponent key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="dashboardCont escapeSidebar">
        <Header />
        <div className="dashGrid">
          <EventGrid />
          <TaskGrid />
          <ProfileSideBar />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
