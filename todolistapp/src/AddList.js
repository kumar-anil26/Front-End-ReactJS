import React, { Component } from "react";
import ShowTodo from "./ShowTodo";
import "./AddList.css";
export default class AddList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <th>Task</th>
          <th>Action</th>
        </thead>
        <tbody>
          {this.props.tasks.map((t, index) => {
            return (
              <ShowTodo
                key={index}
                taskItem={t}
                idx={index}
                deleteTask={this.props.deleteTask}
                editTask={this.props.editTask}
                toggleTask={this.props.toggleTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
