import React from "react";
import rajGirl from "../assets/raj-pfp.png";
import "../styles/profile.css";
export const ProfileSideBar = () => {
  return (
    <div className="profileBar">
      <h4 className="pHeadText">Student Profile</h4>
      <div className="userDetails">
        <div className="userpfp">
          <img src={rajGirl} alt="user" />
        </div>
        <h5>Raj Anadkat</h5>
        <p>
          Student ID : <span>TIPSG5682</span>
        </p>
        <p>Gender : Female</p>
        <button className="btn">Profile</button>
      </div>
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
    </div>
  );
};
