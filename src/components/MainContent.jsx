import React, { Component } from "react";
import SideBar from "./SideBar";
import ProjectForm, { TodoForm, EditTodoForm } from "./ProjectForm";
import ProjectDisplay from "./ProjectDisplay";
import { v4 as uuidv4 } from "uuid";

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          projectId: "pro-1",
          projectName: "sample project",
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
      displayEditTodoForm: false,
      toggleCompleteTask: false,
      currDisplayProject: null,
      editTodoValue: null,
    };
  }

  closeTodoForm = () => this.setState({ displayTodoForm: false });
  displayTodoForm = () => this.setState({ displayTodoForm: true });
  closeEditTodoForm = () => this.setState({ displayEditTodoForm: false });
  closeProjectForm = () => this.setState({ displayProjectForm: false });
  displayProjectForm = () => this.setState({ displayProjectForm: true });
  toggleCompleteTask = () => {
    if (this.state.toggleCompleteTask) {
      this.setState({ toggleCompleteTask: false });
    } else {
      this.setState({ toggleCompleteTask: true });
    }
  };
  displayEditTodoForm = (projectId, todoId, title, date, priority) => {
    this.setState({
      editTodoValue: {
        projectId,
        todoId,
        title,
        date,
        priority,
      },
      displayEditTodoForm: true,
    });
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
        cur.data.push(newData);
      }
      return cur;
    });
    this.setState({
      projects: currProject,
      displayTodoForm: false,
    });
  };

  displaySelectedProject = (projectId) => {
    let currProject = this.state.projects.find(
      (val) => val.projectId === projectId
    );
    this.setState({
      currDisplayProject: currProject,
    });
  };

  completeTodo = (projectId, todoId) => {
    let currProject = this.state.projects.map((cur) => {
      if (cur.projectId === projectId) {
        cur.data = cur.data.map((task) => {
          if (task.id === todoId) {
            task.isComplete = true;
          }
          return task;
        });
      }
      return cur;
    });
    this.setState({
      projects: currProject,
    });
  };

  deleteProject = (projectId) => {
    if (this.state.projects.length > 1) {
      let deleteProject = this.state.projects.filter(
        (cur) => cur.projectId !== projectId
      );
      this.setState({
        projects: deleteProject,
        currDisplayProject: this.state.projects[0],
      });
    } else {
      alert("Projects list cant be empty");
    }
  };

  deleteTodo = (projectId, todoId) => {
    let currProject = this.state.projects.map((cur) => {
      if (cur.projectId === projectId) {
        cur.data = cur.data.filter((task) => task.id !== todoId);
      }
      return cur;
    });
    this.setState({
      projects: currProject,
    });
  };

  editTodo = (projectId, todoId, title, date, priority) => {
    let currProject = this.state.projects.map((cur) => {
      if (cur.projectId === projectId) {
        cur.data = cur.data.map((task) => {
          if (task.id === todoId) {
            task.title = title;
            task.date = date;
            task.priority = priority;
          }
          return task;
        });
      }
      return cur;
    });
    this.setState({
      projects: currProject,
      displayEditTodoForm: false,
    });
  };

  render() {
    return (
      <div className="row">
        <SideBar
          value={this.state.projects}
          displayProjectForm={this.displayProjectForm}
          displaySelectedProject={this.displaySelectedProject}
        >
          {this.state.displayProjectForm ? (
            <ProjectForm
              closeProjectForm={this.closeProjectForm}
              addNewProject={this.addNewProject}
            />
          ) : null}

          {this.state.displayEditTodoForm ? (
            <EditTodoForm
              data={this.state.editTodoValue}
              closeEditTodoForm={this.closeEditTodoForm}
              editTodo={this.editTodo}
            />
          ) : null}

          {this.state.displayTodoForm ? (
            <TodoForm
              closeTodoForm={this.closeTodoForm}
              addNewTodo={this.addNewTodo}
            />
          ) : null}
        </SideBar>

        <ProjectDisplay
          value={
            this.state.currDisplayProject
              ? this.state.currDisplayProject
              : this.state.projects[0]
          }
          completeTaskDisplay={this.state.toggleCompleteTask}
          toggleCompleteTask={this.toggleCompleteTask}
          deleteProject={this.deleteProject}
          displayTodoForm={this.displayTodoForm}
          closeTodoForm={this.closeTodoForm}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
          displayEditTodoForm={this.displayEditTodoForm}
        ></ProjectDisplay>
      </div>
    );
  }
}
