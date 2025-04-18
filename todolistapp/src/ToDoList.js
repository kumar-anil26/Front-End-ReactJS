import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import AddList from "./AddList";
import "./ToDoList.css";
export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addToDo = this.addToDo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  addToDo(tname) {
    if (tname.trim() === "") {
      alert("Task cannot be blank...");
      return;
    }
    let newTask = { taskName: tname.trim(), isCompleted: false };
    let allTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: allTasks });
  }
  deleteTask(idx) {
    let arr = this.state.tasks.filter((t, index) => index !== idx);
    this.setState({ tasks: arr });
  }
  editTask(index, value) {
    let arr = [...this.state.tasks];
    arr[index].taskName = value;
    this.setState({ tasks: arr });
  }
  toggleTask(idx) {
    let arr = [...this.state.tasks];
    arr[idx].isCompleted = !arr[idx].isCompleted;
    this.setState({ tasks: arr });
  }
  render() {
    return (
      <div className="main">
        <h1>ToDo List</h1>
        <div className="container">
          <ToDoForm add={this.addToDo} />
        </div>
        <div>
          <AddList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
