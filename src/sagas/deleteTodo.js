import axios from 'axios'
import {takeLatest, put} from 'redux-saga/effects'
import {DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, ROOT_URL } from '../constants/actionTypes'
export function* watcherDeleteSaga() {
  yield takeLatest(DELETE_TODO, workerDelete)
}
export function* workerDelete(action) {
  try {
    const res = yield axios({
      method: 'DELETE',
      url: ROOT_URL + `${action.todo.id}`
    })
    if (res.status === 200) {
      yield put({type: DELETE_TODO_SUCCESS, payload:res})
    }
  } catch(err) {
    yield put( {type: DELETE_TODO_FAILURE, payload: err})
  }
}