import React from "react";
import rajGirl from "../assets/raj-pfp.png";
import cmIcon from "../assets/codemavens-icon.png";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/profilebar.css";
export const ProfileSideBar = () => {
  return (
    <div className="profileBar">
      <div className="userDetails">
        <h4 className="pHeadText">Student Profile</h4>
        <div className="userpfp">
          <img src={rajGirl} alt="user" />
        </div>
        <h5>Raj Anadkat</h5>
        <p>
          Student ID : <span>TIPSG5682</span>
        </p>
        <p>Gender : Female</p>
        <Link to="/student-profile" className="btn">
          View Profile
        </Link>
      </div>
      <div className="dashProfGrid">
        <div className="wProgBox">
          <h3>Your Weekly Progress</h3>
          <p className="progSep">You’re currently in week 6 of 6</p>
          <p>We are almost there!</p>
        </div>
        <div className="qScoreBox">
          <h3>Total Quiz Score</h3>
          <h2>660</h2>
          <p>Your total quiz score so far</p>
        </div>
        <div className="coProgSect">
          <CircularProgressbar
            strokeWidth={12}
            value={70}
            text={`${70}%`}
            styles={{
              text: {
                fill: "#f88",
                fontSize: "16px",
              },
              path: {
                stroke: "#FFAA90",
                strokeLinecap: "butt",
              },
              trail: {
                stroke: "#FFD5C7",
              },
            }}
          />
          <div className="coCheckers">
            <div className="coCheck">
              <div className="coCube compCube"></div> <p>Completed</p>
            </div>
            <div className="coCheck">
              <div className="coCube incompCube"></div> <p>Incomplete</p>
            </div>
          </div>
        </div>
        <div className="slackBanner">
          <h5>Slack Channel</h5>
          <div className="slackInner">
            <img src={cmIcon} alt="icon" />
            <h3>CodeMavens</h3>
          </div>
          <a href="https://codemavens.io.slack.com">Join us on Slack!</a>
        </div>
      </div>
    </div>
  );
};
