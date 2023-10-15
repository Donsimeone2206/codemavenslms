import React, { useState } from "react";
import "../styles/sidebar.css";
import CMlogo from "../assets/codemavens-logo.png";
import { Link, useLocation } from "react-router-dom";
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
    link: "/",
  },
  {
    id: 2,
    title: "Events",
    icon: <BiCalendarEvent />,
    link: "/student-events",
  },
  {
    id: 3,
    title: "Quizzes",
    icon: <MdQuiz />,
    link: "/student-quizzes",
  },
  {
    id: 4,
    title: "Exams",
    icon: <PiExam />,
    link: "/student-exams",
  },
  {
    id: 5,
    title: "Projects",
    icon: <BiNotepad />,
    link: "/student-projects",
  },
  {
    id: 6,
    title: "Course Contents",
    icon: <BiSolidBookBookmark />,
    link: "/student-courses",
  },
  {
    id: 7,
    title: "Feedback",
    icon: <MdFeedback />,
    link: "/student-feedback",
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
  const location = useLocation();
  const locationPath = location.pathname;
  const { id, title, icon, link, active, setActive, setNavOn } = props;
  return (
    <Link
      to={link}
      className={`barItem ${locationPath === link ? "active" : ""} `}
      onClick={() => {
        setActive(id);
        setNavOn(false);
      }}
    >
      <object className="barIcon">{icon}</object>
      <h5>{title}</h5>
    </Link>
  );
};
const Sidebar = ({ navOn, setNavOn }) => {
  const [active, setActive] = useState(1);
  return (
    <div className={`sidebar ${navOn && "showNav"}`}>
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
                setNavOn={setNavOn}
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
