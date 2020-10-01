import React, { Component } from "react";
import SideBar from "./SideBar";
import ProjectForm from "./ProjectForm";
import { v4 as uuidv4 } from "uuid";

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          projectId: "pro-1",
          projectName: "project 1",
          data: [
            {
              id: 1,
              title: "sample task 1",
              date: "02/12/2019",
              isComplete: false,
            },
            {
              id: 2,
              title: "sample task 2",
              date: "02/12/2019",
              isComplete: false,
            },
          ],
        },
      ],
      displayProjectForm: false,
      currDisplayProject: [],
    };
  }

  displaySelectedProject = (projectId) => {
    currProject = this.state.projects.find(
      (val) => val.projectId === projectId
    );
  };

  closeProjectForm = () => {
    this.setState({ displayProjectForm: false });
  };
  displayProjectForm = () => {
    this.setState({ displayProjectForm: true });
  };

  addNewProject = (projectName) => {
    console.log(projectName);
    const projectData = {
      projectId: uuidv4(),
      projectName: projectName,
      data: [],
    };
    this.setState({
      projects: [...this.state.projects, projectData],
      displayProjectForm: false,
    });
  };

  render() {
    return (
      <div className="row">
        {this.state.displayProjectForm ? (
          <ProjectForm
            closeProjectForm={this.closeProjectForm}
            addNewProject={this.addNewProject}
          />
        ) : null}
        <SideBar
          value={this.state.projects}
          displayProjectForm={this.displayProjectForm}
        />
      </div>
    );
  }
}
