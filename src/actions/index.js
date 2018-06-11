import { FETCH_TODO, DELETE_TODO, ADD_TODO } from "../constants/actionTypes";

export const fetchData = () => ({
  type: FETCH_TODO
})
export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo
})
export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})
