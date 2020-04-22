import React, { Component } from 'react';
class TodoItem extends Component {
    render() { 
        const {title, removeItem} = this.props;
        return (
            <div>
                <li className="list-group-item my-2 justify-content-between d-flex">
                    <h5 className="title">{title}</h5>
                        <div className="todo-icon">
                            <button className="btn btn-sm btn-danger" onClick={removeItem}>
                             Delete</button>
                        </div>
                </li>
            </div>
        );
    }
}
 
export default TodoItem;