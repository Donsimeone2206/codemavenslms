import React from "react";
import { Header } from "./Dashboard";
import { HiSearch } from "react-icons/hi";
import Sidebar from "../components/Sidebar";
import "../styles/projects.css";
const projectArray = [
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
];
export default function Projects() {
  return (
    <div>
      <>
        <Sidebar />
        <div className="projectCont escapeSidebar">
          <Header />
          <header className="projectsHead">
            <h4>Projects</h4>
            <div className="projectsTopBar">
              <h5>History</h5>
              <div className="projectsSearch">
                <HiSearch />
                <input
                  type="search"
                  name="searchProjects"
                  id="searchProjects"
                  placeholder="Search.."
                />
              </div>
            </div>
          </header>
          <div className="projectsGrid">
            {projectArray.map((item) => {
              return <ProjectBox key={item.id} {...item} />;
            })}
          </div>
        </div>
      </>
    </div>
  );
}
export const ProjectBox = ({
  title,
  projectDesc,
  projectInst,
  projectPassPc,
  projectLink,
}) => {
  return (
    <div className="projectBox">
      <h4>{title}</h4>
      <p>{projectDesc}</p>
      <br />
      <p>{projectInst}</p>
      <div className="projectPcText">
        <span>Passing Percentage</span>
        <span className="pcColor">{projectPassPc}%</span>
      </div>
      <div className="projPcBar">
        <div
          className="pcBarChild"
          style={{ width: projectPassPc + "%" }}
        ></div>
      </div>
      <a href={projectLink} className="fillBtn">
        View Details
      </a>
    </div>
  );
};
