import React, { useState } from "react";
import "../styles/sidebar.css";
import CMlogo from "../assets/codemavens-logo.png";
import {
  BiNotepad,
  BiSolidBookBookmark,
  BiHomeAlt2,
  BiCalendarEvent,
  BiLogOutCircle,
} from "react-icons/bi";
import { MdFeedback, MdQuiz } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
const sidebarArray = [
  {
    id: 1,
    title: "Dashboard",
    icon: <BiHomeAlt2 />,
  },
  {
    id: 2,
    title: "Events",
    icon: <BiCalendarEvent />,
  },
  {
    id: 3,
    title: "Schedule",
    icon: <AiOutlineSchedule />,
  },
  {
    id: 4,
    title: "Quizzes",
    icon: <MdQuiz />,
  },
  {
    id: 5,
    title: "Exams",
    icon: <PiExam />,
  },
  {
    id: 6,
    title: "Assignments",
    icon: <BiNotepad />,
  },
  {
    id: 7,
    title: "Course Contents",
    icon: <BiSolidBookBookmark />,
  },
  {
    id: 8,
    title: "Feedback",
    icon: <MdFeedback />,
  },
];
const CMLogo = () => {
  return (
    <section className="logo">
      <img src={CMlogo} alt="codemavens" />
    </section>
  );
};
const SidebarItem = (props) => {
  const { id, title, icon, active, setActive } = props;
  return (
    <a
      href="#"
      className={`barItem ${active === id ? "active" : ""} `}
      onClick={() => {
        setActive(id);
      }}
    >
      <object className="barIcon">{icon}</object>
      <h5>{title}</h5>
    </a>
  );
};
const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar">
      <CMLogo />
      <div className="sideItems">
        <div className="sidebarGrid">
          {sidebarArray.map((item) => {
            return (
              <SidebarItem
                key={item.id}
                {...item}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
        <a href="#" className="logoutbtn">
          <BiLogOutCircle size={20} /> Log Out
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
