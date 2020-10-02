import React from "react";

export default function TodoDisplay({ projectId, data }) {
  console.log(data);
  const { id, title, date, isComplete } = data;
  return (
    <div className="todo-item border-primary list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div>
        <h6 className="list-group-item-heading">{title}</h6>
        <p className="list-group-item-text">{date}</p>
      </div>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <button className="btn btn-sm btn-outline-success todo-comp-btn">
            Done task
          </button>
          <button className="btn btn-sm btn-outline-secondary todo-edit-btn">
            Edit task
          </button>
          <button className="btn btn-sm btn-outline-danger todo-del-btn">
            delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
