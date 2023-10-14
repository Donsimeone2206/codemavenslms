import React, { useState } from "react";
import "../styles/profile.css";
import rajGirl from "../assets/raj-pfp.png";
import { WProgBox, QScoreBox } from "../components/ProfileBar";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import QuizComponent from "../components/QuizComponent";
import { ProjectBox } from "./Projects";
const profProjArray = [
  {
    id: 1,
    title: "Survey Form",
    projectInst:
      "This is one of the required projects to earn your certification. ",
    projectDesc:
      "For this project, you will build a survey form to collect data from your users.",
    projectPassPc: 70,
    projectLink: "#",
  },
  {
    id: 2,
    title: "Survey Form",
    projectInst:
      "This is one of the required projects to earn your certification. ",
    projectDesc:
      "For this project, you will build a survey form to collect data from your users.",
    projectPassPc: 70,
    projectLink: "#",
  },
  {
    id: 3,
    title: "Survey Form",
    projectInst:
      "This is one of the required projects to earn your certification. ",
    projectDesc:
      "For this project, you will build a survey form to collect data from your users.",
    projectPassPc: 70,
    projectLink: "#",
  },
  {
    id: 4,
    title: "Survey Form",
    projectInst:
      "This is one of the required projects to earn your certification. ",
    projectDesc:
      "For this project, you will build a survey form to collect data from your users.",
    projectPassPc: 70,
    projectLink: "#",
  },
];
const navBtnArray = [
  {
    id: 1,
    content: "General",
  },
  {
    id: 2,
    content: "Quiz",
  },
  {
    id: 3,
    content: "Exams",
  },
  {
    id: 4,
    content: "Projects",
  },
];
const profQuizArray = [
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
  {
    id: 4,
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
const profExamsArray = [
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
const Profile = () => {
  const [content, setContent] = useState("General");
  return (
    <div className="profilePageCont">
      <Link to="/" className="profileReturn">
        <AiOutlineArrowLeft />
        <p>Student Profile</p>
      </Link>
      <div className="profileDGrid">
        <div className="userBox">
          <div className="userPic">
            <img src={rajGirl} alt="userpfp" />
          </div>
          <div className="userInfo">
            <h6>Raj Anakdat</h6>
            <p className="userIDLine">
              Student ID : <span className="channel">TIPSG5682</span>
            </p>
            <p>Gender : Female</p>
          </div>
        </div>
        <div className="userAttendanceBox">
          <h3>Attendance</h3>
          <div className="attExtras">
            <h2>85%</h2>
            <h6>
              <span className="channel">85</span>/100
            </h6>
          </div>
        </div>
        <WProgBox />
        <QScoreBox />
      </div>
      <div className="profileNav">
        {navBtnArray.map((item) => {
          return (
            <button
              key={item.id}
              className={`profNavBtn ${item.content === content && "active"}`}
              onClick={() => {
                setContent(item.content);
              }}
            >
              {item.content}
            </button>
          );
        })}
      </div>
      <div className="profileContent">
        {content === "General" && (
          <div className="profileGeneral">
            <div className="profGenUpper">
              <div className="genSect1">
                <p>Course : B.Tech Specialization in Health Informatics</p>
                <p>Full name : Raj Anadkat</p>
                <p>Course Start Date : 17 Jan 2023</p>
                <p>Course End Date : 17 Jan 2025</p>
              </div>
              <div className="genSect2">
                <div className="freedareal">
                  <h6>Center Details</h6>
                  <p>Pincode : 302021</p>
                  <p>District : Jaipur</p>
                  <p>State : Rajasthan</p>
                  <p className="cutShort">
                    Address : Plot no. 116, Lane number 4, Rathore nagar,
                    Vaishali nagar , Jaipur
                  </p>
                </div>
                <div>
                  <h6>Contact Center</h6>
                  <p>
                    <FiPhoneCall /> +23456655221
                  </p>
                  <p>
                    <AiOutlineMail /> hanumar.center@tipsg.in
                  </p>
                </div>
              </div>
            </div>
            <div className="profGenLower">
              <div className="genLow1">
                <div className="genBoxHead">Attendance</div>
                <div className="genBox">
                  <p>Total Classes : 145</p>
                  <p className="colorGreen">Attended : 120</p>
                  <p className="colorRed">Missed : 25</p>
                  <a href="#" className="fillBtn">
                    View Details
                  </a>
                </div>
              </div>
              <div className="genLow2">
                <div className="genBoxHead">Quiz</div>
                <div className="genBox">
                  <p>Total Quizzes : 145</p>
                  <div className="orNot">
                    <p className="colorGray mRight">Attempted : 120</p>
                    <p className="colorGrey">Unattempted: 125</p>
                  </div>
                  <div className="orNot">
                    <p className="colorGreen mRight">Passed : 25</p>
                    <p className="colorRed">Failed : 30</p>
                  </div>
                  <a href="#" className="fillBtn">
                    View Details
                  </a>
                </div>
              </div>
              <div className="genLow3">
                <div className="genBoxHead">Exams</div>
                <div className="genBox">
                  <p>Total Classes : 145</p>
                  <div className="orNot">
                    <p className="colorGray mRight">Attempted : 120</p>
                    <p className="colorGrey">Unattempted: 125</p>
                  </div>
                  <div className="orNot">
                    <p className="colorGreen mRight">Passed : 25</p>
                    <p className="colorRed">Failed : 30</p>
                  </div>
                  <a href="#" className="fillBtn">
                    View Details
                  </a>
                </div>
              </div>
              <div className="genLow4">
                <div className="genBoxHead">Projects</div>
                <div className="genBox">
                  <p>Total Classes : 145</p>
                  <div className="orNot">
                    <p className="colorGray mRight">Attempted : 120</p>
                    <p className="colorGrey">Unattempted: 125</p>
                  </div>
                  <div className="orNot">
                    <p className="colorGreen mRight">Passed : 25</p>
                    <p className="colorRed">Failed : 30</p>
                  </div>
                  <a href="#" className="fillBtn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {content === "Quiz" && (
          <div className="quizCont">
            <div className="sectDeets">
              <p>Total Quizzes : 145</p>
              <p className="colorGray mRight">Attempted : 120</p>
              <p className="colorGrey">Unattempted: 125</p>
              <p className="colorGreen mRight">Passed : 25</p>
              <p className="colorRed">Failed : 30</p>
            </div>
            <div className="profQuizSect">
              {profQuizArray.map((item) => {
                return <QuizComponent key={item.id} {...item} />;
              })}
            </div>
          </div>
        )}
        {content === "Exams" && (
          <div className="examsCont">
            <div className="sectDeets">
              <p>Total Exams : 145</p>
              <p className="colorGray mRight">Attempted : 120</p>
              <p className="colorGrey">Unattempted: 125</p>
              <p className="colorGreen mRight">Passed : 25</p>
              <p className="colorRed">Failed : 30</p>
            </div>
            <div className="profExamsSect">
              {profExamsArray.map((item) => {
                return <QuizComponent key={item.id} {...item} />;
              })}
            </div>
          </div>
        )}
        {content === "Projects" && (
          <div className="projCont">
            <div className="sectDeets">
              <p>Total Projects : 245</p>
            </div>
            <div className="profProjSect">
              {profProjArray.map((item) => {
                return <ProjectBox key={item.id} {...item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
