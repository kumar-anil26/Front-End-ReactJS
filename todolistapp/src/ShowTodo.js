import React, { Component } from "react";
import "./ShowTodo.css";
export default class ShowTodo extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.handerChange = this.handerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.state = { task: this.props.taskItem.taskName, isEditing: false };
  }
  handerChange(e) {
    this.setState({ task: e.target.value });
  }
  handlerSubmit(e) {
    e.preventDefault();
    this.props.editTask(this.props.idx, this.state.task);
    this.setState({ isEditing: false });
  }
  deleteTask() {
    this.props.deleteTask(this.props.idx);
  }
  editTask(editing) {
    this.setState({ isEditing: editing });
  }
  toggleTask() {
    this.props.toggleTask(this.props.idx);
  }
  render() {
    let result = "";
    if (this.state.isEditing) {
      result = (
        <tr className="list">
          <td colSpan={2}>
            <form onSubmit={this.handlerSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handerChange}
              />

              <span style={{ float: "right" }}>
                <button className="save task">Save</button>
                <button
                  className="back task"
                  onClick={() => this.editTask(false)}
                >
                  Back
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr className="list">
          <td onClick={this.toggleTask}>
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-completed"
              }
            >
              {this.props.taskItem.taskName}
            </span>
          </td>
          <td className="action">
            <button
              className="edit task"
              onClick={() => {
                this.editTask(true);
              }}
            >
              Edit
            </button>
            <button className="Delete task" onClick={this.deleteTask}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
