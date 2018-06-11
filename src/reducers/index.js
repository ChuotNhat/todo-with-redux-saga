import { FETCH_TODO_SUCCESS, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, FETCH_TODO_FAILURE, ADD_TODO_FAILURE, DELETE_TODO_FAILURE } from "../constants/actionTypes";

const initialState = {
  fetched: false,
  todos: [],
  error: false
}
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        fetched: true,
        todos: action.payload.data
      }
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        fetched: true
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.concat(action.payload.data)
      }
    case ADD_TODO_FAILURE:
      return {
        ...state,
        erorr: action.erorr
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.data.id)
      }
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        erorr: action.erorr
      }
    default:
      return state
  }
}