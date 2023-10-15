import React from "react";
import Sidebar from "../components/Sidebar";
import { HiSearch } from "react-icons/hi";
import { Header } from "./Dashboard";
import QuizComponent from "../components/QuizComponent";
import "../styles/quizzes.css";
const quizArray = [
  {
    id: 1,
    title: "Articulate Structure of C++ and Java in Semester 1",
    courseDesc: "Course : B.Tech Specialization in Health Informatics",
    quizSubject: "Network Engineering",
    quizDate: "3-01-2023",
    quizTime: "12:30 AM - 01:40 PM",
    quizQuestionsNo: 50,
    quizAttempts: 2,
    quizPassingPc: 70,
    quizLink: "#",
  },
  {
    id: 2,
    title: "Articulate Structure of C++ and Java in Semester 1",
    courseDesc: "Course : B.Tech Specialization in Health Informatics",
    quizSubject: "Network Engineering",
    quizDate: "3-01-2023",
    quizTime: "12:30 AM - 01:40 PM",
    quizQuestionsNo: 50,
    quizAttempts: 2,
    quizPassingPc: 70,
    quizLink: "#",
  },
  {
    id: 3,
    title: "Articulate Structure of C++ and Java in Semester 1",
    courseDesc: "Course : B.Tech Specialization in Health Informatics",
    quizSubject: "Network Engineering",
    quizDate: "3-01-2023",
    quizTime: "12:30 AM - 01:40 PM",
    quizQuestionsNo: 50,
    quizAttempts: 2,
    quizPassingPc: 70,
    quizLink: "#",
  },
];
function Quizzes({ navOn, setNavOn }) {
  return (
    <>
      <Sidebar navOn={navOn} setNavOn={setNavOn} />
      <div className="quizCont escapeSidebar">
        <Header navOn={navOn} setNavOn={setNavOn} />
        <header className="quizHead">
          <h4>Quizzes</h4>
          <div className="quizTopBar">
            <h5>Scheduled Quiz History</h5>
            <div className="quizSearch">
              <HiSearch />
              <input
                type="search"
                name="searchQuizzes"
                id="searchQuizzes"
                placeholder="Search.."
              />
            </div>
          </div>
        </header>
        <div className="quizGrid">
          {quizArray.map((item) => {
            return <QuizComponent key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Quizzes;
