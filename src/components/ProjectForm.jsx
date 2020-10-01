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
