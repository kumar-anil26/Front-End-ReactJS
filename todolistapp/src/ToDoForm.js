import React, { Component } from "react";
import "./ToDoForm.css";
export default class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  handlerChange(e) {
    this.setState({ name: e.target.value });
  }
  handlerSubmit(e) {
    e.preventDefault();
    this.props.add(this.state.name);
    this.setState({ name: "" });
  }
  render() {
    return (
      <form className="todoForm" onSubmit={this.handlerSubmit}>
        <input
          type="text"
          id="name"
          value={this.state.name}
          name="name"
          onChange={this.handlerChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
