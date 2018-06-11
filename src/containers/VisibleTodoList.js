import { connect } from 'react-redux'
import TodoList from '../components/TodoList';
import { fetchData } from '../actions/index';
import { deleteTodo } from '../actions/index';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: () => {
      dispatch(fetchData());
    },
    deleteTodo: (id) => {
        dispatch(deleteTodo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);