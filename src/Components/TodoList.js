import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() { 
        const {items, clearList, removeItem} = this.props;
        return (
            <div className="card card-body my-3">
                <h4 className="text-center">Task to be done</h4>
                <ul className="list-group my-2">
                    {
                        items.map(item=>{
                            return(
                                <TodoItem 
                                key={item.id} 
                                title={item.title} 
                                removeItem={()=> removeItem(item.id)}/>
                            );
                        })
                    }
                <button className="btn btn-block btn-danger" onClick={clearList}>Clear List</button>
                </ul>
            </div>
        );
    }
}

export default TodoList;