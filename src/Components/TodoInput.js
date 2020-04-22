import React, { Component } from 'react';
class TodoInput extends Component {
    render() { 
        const { item, handleChange, handleSubmit } = this.props;
        return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group"> 
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-success text-white">

                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Add a To-Do Item"
                    value={item} onChange={handleChange}/>
                </div>
                <button type="Submit" className="btn btn-block btn-success mt-3">Add Item</button>
            </form>
        </div>
        )
    }
}
 
export default TodoInput;