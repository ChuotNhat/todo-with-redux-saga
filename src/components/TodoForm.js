import React, {Component} from 'react';
let input
class TodoForm extends Component {
  addTodo = (text) => {
    this.props.addTodo(text);
  }
  render() {
    return(
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.addTodo(input.value)
            input.value = ''
          }}
        >
          <input ref={node => input = node} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;