import React, { Component } from "react";

export default class ProjectForm extends Component {
  constructor(props) {
    super();
    this.state = {
      projectName: "",
    };
  }
  updateProjectName = (e) => {
    this.setState({ projectName: e.target.value });
  };
  addNewProject = (e) => {
    e.preventDefault();
    alert(`${this.state.projectName}`);
  };
  render() {
    return (
      <div id="id01" className="modal">
        <form className="modal-content animate" id="form-add-project">
          <div className="container">
            <label htmlFor="uname">
              <b>Add New Project</b>
            </label>
            <input
              type="text"
              placeholder="Project Name"
              name="uname"
              id="project-name"
              value={this.state.projectName}
              onChange={this.updateProjectName}
              required
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => this.props.addNewProject(this.state.projectName)}
            >
              Add Project
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.closeProjectForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = {
      todoName: "",
      todoDate: "",
      todoPriority: "",
    };
  }
  updateTodoName = (e) => {
    this.setState({ todoName: e.target.value });
  };
  updateTodoDate = (e) => {
    this.setState({ todoDate: e.target.value });
  };
  updateTodoPriority = (e) => {
    this.setState({ todoPriority: e.target.value });
  };
  render() {
    const { todoName, todoDate, todoPriority } = this.state;
    return (
      <div id="id02" class="modal">
        <form class="modal-content animate" id="form-add-todo">
          <div class="container">
            <label for="uname">
              <b>Add New Task</b>
            </label>
            <input
              type="text"
              placeholder="todo"
              name="uname"
              id="todo-title"
              value={this.todoName}
              onChange={this.updateTodoName}
              required
            />
            <div class="d-flex justify-content-between">
              <input
                class="form-control mr-2"
                type="date"
                placeholder="2011-08-19"
                id="todo-due-date"
                value={this.todoDate}
                onChange={this.updateTodoDate}
              />
              <select
                class="form-control ml-2"
                id="todo-priority-selector"
                value={this.todoPriority}
                onChange={this.updateTodoPriority}
              >
                <option value="standard">standard</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              id="todo-submit-btn"
              onClick={() =>
                this.props.addNewTodo(todoName, todoDate, todoPriority)
              }
            >
              Add Todo
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.props.closeTodoForm}
            >
              close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export class EditTodoForm extends Component {
  constructor(props) {
    super();
    console.log("todoEdit", props);
    this.state = {
      todoName: props.data.title,
      todoDate: props.data.date,
      todoPriority: props.data.priority,
    };
  }
  updateTodoName = (e) => {
    this.setState({ todoName: e.target.value });
  };
  updateTodoDate = (e) => {
    this.setState({ todoDate: e.target.value });
  };
  updateTodoPriority = (e) => {
    this.setState({ todoPriority: e.target.value });
  };
  render() {
    console.log("this", this.state);
    const { todoName, todoDate, todoPriority } = this.state;
    const { projectId, todoId } = this.props.data;
    return (
      <div id="id02" class="modal">
        <form class="modal-content animate" id="form-add-todo">
          <div class="container">
            <label for="uname">
              <b>Add New Task</b>
            </label>
            <input
              type="text"
              placeholder="todo"
              name="uname"
              id="todo-title"
              value={todoName}
              onChange={this.updateTodoName}
              required
            />
            <div class="d-flex justify-content-between">
              <input
                class="form-control mr-2"
                type="date"
                placeholder="2011-08-19"
                id="todo-due-date"
                value={todoDate}
                onChange={this.updateTodoDate}
              />
              <select
                class="form-control ml-2"
                id="todo-priority-selector"
                value={todoPriority}
                onChange={this.updateTodoPriority}
              >
                <option value="standard">standard</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              id="todo-submit-btn"
              onClick={() =>
                this.props.editTodo(
                  projectId,
                  todoId,
                  todoName,
                  todoDate,
                  todoPriority
                )
              }
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.props.closeEditTodoForm}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
