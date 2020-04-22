import React, { Component } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from "uuid";

class App extends Component 
{
  state = {
    items: [],
    id:uuid(),
    item: ""
  };

  handleChange = (e) =>{
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault();

    const newItem={
      id:this.state.id, 
      title: this.state.item
    }
    
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems, 
      item: "", 
      id: uuid()
    });
  };

  clearList = ()=>{ 
    this.setState({
      items: []
    });
  };

  removeItem = (id)=>{
    const filteredItems = this.state.items.filter(item=> item.id !== id)
    this.setState({
      items: filteredItems
    });
  };

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-8 mt-4 card card-body my-3 main-container" >
            <h3 className="text-center">To-Do List</h3>
            <p className="text-center">Manage your Daily Task Here!</p>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}/>
            <TodoList
            items= {this.state.items} 
            clearList={this.clearList} 
            removeItem={this.removeItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
