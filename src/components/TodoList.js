import React, { Component } from 'react';
import '../App.css';
class TodoList extends Component {

  componentWillMount() {
    this.props.fetchTodo();
  }

  deleteTodo = (todo) => {
    this.props.deleteTodo(todo);
  }

  render() {
    const { todos } = this.props; 
    return(
      <div className="TodoList">        
        <ul>
          {
            todos.map(todo => {            
              return (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={() => this.deleteTodo(todo)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;