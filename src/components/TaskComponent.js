import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import "../styles/taskbox.css";

const TaskComponent = ({
  taskTitle,
  taskAssignedTime,
  taskAssignedDate,
  taskDueTime,
  taskDueDate,
  taskStatus,
  taskLink,
}) => {
  return (
    <div className="taskBox">
      <div className="taskTitle">
        <p>{taskTitle}</p>
      </div>
      <div className="assignedSect taskItemSect">
        <p>Assigned</p>
        <span>
          <AiOutlineClockCircle />
          <p>{taskAssignedTime}</p>
        </span>
        <span>
          <BsCalendar3 />
          <p>{taskAssignedDate}</p>
        </span>
      </div>
      <div className="dueSect taskItemSect">
        <p>Due</p>
        <span>
          <AiOutlineClockCircle />
          <p>{taskDueTime}</p>
        </span>
        <span>
          <BsCalendar3 />
          <p>{taskDueDate}</p>
        </span>
      </div>
      <div className="taskStatus">{taskStatus}</div>
      <a href={taskLink} className="btn">
        View Details
      </a>
    </div>
  );
};
export default TaskComponent;
