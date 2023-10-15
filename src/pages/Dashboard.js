import React, { useState } from "react";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
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
export const Header = ({ navOn, setNavOn }) => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="headerCont">
      <div
        className="navToggle"
        onClick={() => {
          setNavOn(!navOn);
        }}
      >
        {navOn ? <AiOutlineClose /> : <HiOutlineMenuAlt2 />}
      </div>
      <h2 className="welcomeText">Hi, Codemavens</h2>
      <div className="headerIcons">
        <div className="notifs">
          <IoNotificationsSharp />
        </div>
        <div
          className="userDropdown"
          onClick={() => {
            setDrop(!drop);
          }}
        >
          <span className="userIcon">
            <BiSolidUserCircle />
          </span>
          <span className="downIcon">
            {drop ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </span>
        </div>
      </div>
      <div className={`dropFloat ${drop && "active"}`}>
        <Link to="/student-profile" className="floatProf">
          <BiSolidUserCircle />
          <p>My Profile</p>
        </Link>
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

function Dashboard({ navOn, setNavOn }) {
  return (
    <>
      <Sidebar navOn={navOn} setNavOn={setNavOn} />
      <div className="dashboardCont escapeSidebar">
        <Header navOn={navOn} setNavOn={setNavOn} />
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
