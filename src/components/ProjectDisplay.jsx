import React from "react";
import TodoDisplay from "./TodoDisplay";

export default function ProjectDisplay(props) {
  const { projectId, projectName, data } = props.value;
  console.log(props.value.data);
  return (
    <React.Fragment>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        id={"display-project"}
      >
        <div className="project-item" id={projectId}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h2 className="h2">{projectName}</h2>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={props.displayTodoForm}
                >
                  Add Task
                </button>
                <button
                  className=" btn btn-sm btn-outline-danger delete-btn project-del-btn"
                  id="project-delete-btn"
                  onClick={() => props.deleteProject(projectId)}
                >
                  delete Project
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary ml-2 show-completed-task"
                  value="true"
                  onClick={props.toggleCompleteTask}
                >
                  {props.completeTaskDisplay ? "Show tasks" : "Tasks History"}
                </button>
              </div>
            </div>
          </div>
          <h4>Todo Lists</h4>
          <div className="table-responsive">
            <div className="list-group">
              {data.map((val) => {
                if (!val.isComplete && !props.completeTaskDisplay) {
                  return (
                    <TodoDisplay
                      key={val.id}
                      projectId={projectId}
                      data={val}
                      completeTodo={props.completeTodo}
                      deleteTodo={props.deleteTodo}
                      displayEditTodoForm={props.displayEditTodoForm}
                    />
                  );
                } else if (val.isComplete && props.completeTaskDisplay) {
                  return (
                    <TodoDisplay
                      key={val.id}
                      projectId={projectId}
                      data={val}
                      completeTodo={props.completeTodo}
                      deleteTodo={props.deleteTodo}
                      displayEditTodoForm={props.displayEditTodoForm}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
