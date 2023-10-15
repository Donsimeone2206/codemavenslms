import React from "react";
import { Header } from "./Dashboard";
import { HiSearch } from "react-icons/hi";
import Sidebar from "../components/Sidebar";
import "../styles/exams.css";
import QuizComponent from "../components/QuizComponent";
const examsArray = [
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
];
export default function Exams({ navOn, setNavOn }) {
  return (
    <div>
      <>
        <Sidebar navOn={navOn} setNavOn={setNavOn} />
        <div className="examsCont escapeSidebar">
          <Header navOn={navOn} setNavOn={setNavOn} />
          <header className="examsHead">
            <h4>Exams</h4>
            <div className="examsTopBar">
              <div className="examsBarNav">
                <h5>Scheduled Exams</h5>
                <h5>History</h5>
              </div>
              <div className="examsSearch">
                <HiSearch />
                <input
                  type="search"
                  name="searchExams"
                  id="searchExams"
                  placeholder="Search.."
                />
              </div>
            </div>
          </header>
          <div className="examsGrid">
            {examsArray.map((item) => {
              return <QuizComponent key={item.id} {...item} />;
            })}
          </div>
        </div>
      </>
    </div>
  );
}
