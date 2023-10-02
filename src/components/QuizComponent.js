import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import "../styles/quizzes.css";
export default function QuizComponent({
  title,
  courseDesc,
  quizSubject,
  quizDate,
  quizTime,
  quizQuestionsNo,
  quizAttempts,
  quizPassingPc,
  quizLink,
}) {
  return (
    <div className="quizBox">
      <div className="quizTitle">
        <h5>{title}</h5>
        <p>{courseDesc}</p>
        <p>Subject: {quizSubject}</p>
      </div>
      <div className="quizLog">
        <div className="quizDateSect">
          <BsFillCalendarFill />
          <span>{quizDate}</span>
        </div>
        <div className="quizTimeSect">
          <FiClock />
          <span>{quizTime}</span>
        </div>
      </div>
      <div className="quizInfo">
        <span>Questions: {quizQuestionsNo}</span>
        <span>Attempts: {quizAttempts}</span>
      </div>
      <div className="quizPcSect">
        <div className="quizPcText">
          <span>Passing Percentage</span>
          <span className="pcColor">{quizPassingPc}%</span>
        </div>
        <div className="quizPcBar">
          <div
            className="pcBarChild"
            style={{ width: quizPassingPc + "%" }}
          ></div>
        </div>
        <a href={quizLink} className="fillBtn">
          View Details
        </a>
      </div>
    </div>
  );
}
