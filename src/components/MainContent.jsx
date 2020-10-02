import React, { Component } from "react";
import SideBar from "./SideBar";
import ProjectForm, { TodoForm } from "./ProjectForm";
import ProjectDisplay from "./ProjectDisplay";
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
          ],
        },
      ],
      displayProjectForm: false,
      displayTodoForm: false,
      currDisplayProject: null,
    };
  }

  closeTodoForm = () => {
    this.setState({ displayTodoForm: false });
  };
  displayTodoForm = () => {
    this.setState({ displayTodoForm: true });
  };

  closeProjectForm = () => {
    this.setState({ displayProjectForm: false });
  };
  displayProjectForm = () => {
    this.setState({ displayProjectForm: true });
  };

  addNewProject = (projectName) => {
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

  addNewTodo = (title, date, priority) => {
    let projectId = this.state.currDisplayProject
      ? this.state.currDisplayProject.projectId
      : this.state.projects[0].projectId;

    let currProject = this.state.projects.map((cur) => {
      if (cur.projectId === projectId) {
        let newData = {
          id: uuidv4(),
          title: title,
          date: date,
          priority: priority,
          isComplete: false,
        };
        console.log("todo ", cur);
        cur.data.push(newData);
      }
      return cur;
    });
    console.log("curr ", currProject);
    this.setState({
      projects: currProject,
      displayTodoForm: false,
    });
  };

  displaySelectedProject = (projectId) => {
    let currProject = this.state.projects.find(
      (val) => val.projectId === projectId
    );
    this.setState({ currDisplayProject: currProject });
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

        {this.state.displayTodoForm ? (
          <TodoForm
            closeProjectForm={this.closeProjectForm}
            addNewProject={this.addNewProject}
            closeTodoForm={this.closeTodoForm}
            addNewTodo={this.addNewTodo}
          />
        ) : null}

        <SideBar
          value={this.state.projects}
          displayProjectForm={this.displayProjectForm}
          displaySelectedProject={this.displaySelectedProject}
        />

        <ProjectDisplay
          value={
            this.state.currDisplayProject
              ? this.state.currDisplayProject
              : this.state.projects[0]
          }
          displayTodoForm={this.displayTodoForm}
          closeTodoForm={this.closeTodoForm}
        ></ProjectDisplay>
      </div>
    );
  }
}
