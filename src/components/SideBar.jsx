import React from "react";

export default function SideBar(props) {
  return (
    <React.Fragment>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="sidebar-sticky pt-3">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Projects</span>
            <a
              className="d-flex align-items-center text-muted button"
              href="#"
              onClick={props.displayProjectForm}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </a>
          </h6>
          {props.children}
          <ul className="nav flex-column mb-2" id="project-list">
            {props.value.map((val) => {
              return (
                <li className="nav-item" key={val.projectId}>
                  <a
                    className="nav-link"
                    href="#"
                    id={val.projectId}
                    onClick={() => props.displaySelectedProject(val.projectId)}
                  >
                    <span data-feather="file-text"></span>
                    {val.projectName}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-sm btn-outline-secondary todo-del-btn "
            onClick={props.displayProjectForm}
          >
            Add Project
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}
