import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { render } from "@testing-library/react";
class App extends Component {
  state = {
    items: [
      { id: "1", title: "wake up" },
      { id: "2", title: "breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = { 
            id: this.state.id, 
            title: this.state.item
        };
    const updatedItems=[...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  };
  handleClearList = () => {
    this.setState({
      items:[]
    })
  };
  handleEdit = id => {
    console.log(`handle Edit ${id}`);
  };
  handleDelete = id => {
    const filteredItem=this.state.items.filter(item=>item.id !==id)
    this.setState({
      items:filteredItem
    })
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">To Do Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.handleClearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
