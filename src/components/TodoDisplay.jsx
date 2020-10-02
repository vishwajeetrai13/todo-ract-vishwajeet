import React from "react";

export default function TodoDisplay(props) {
  const { id, title, date, priority, isComplete } = props.data;
  let containerClass = `todo-item ${setPriorityColour(
    priority,
    isComplete
  )} list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row`;
  return (
    <div className={containerClass}>
      <div>
        <h6 className="list-group-item-heading">{title}</h6>
        <p className="list-group-item-text">{date}</p>
      </div>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <button
            className="btn btn-sm btn-outline-success todo-comp-btn"
            onClick={() => props.completeTodo(props.projectId, id)}
          >
            Done task
          </button>
          <button className="btn btn-sm btn-outline-secondary todo-edit-btn">
            Edit task
          </button>
          <button
            className="btn btn-sm btn-outline-danger todo-del-btn"
            onClick={() => props.deleteTodo(props.projectId, id)}
          >
            delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

let setPriorityColour = (priority, isComplete) => {
  if (isComplete) {
    return "border-success";
  } else {
    if (priority === "high") {
      return "border-danger";
    } else if (priority === "low") {
      return "border-secondary";
    } else {
      return "border-warning";
    }
  }
};
