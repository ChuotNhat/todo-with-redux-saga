import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions/index'
import { connect } from 'react-redux';
const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);