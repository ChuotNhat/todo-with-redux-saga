import axios from 'axios'
import {takeLatest, put} from 'redux-saga/effects'
import {FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, ROOT_URL } from '../constants/actionTypes'
export function* watcherFetchSaga() {
  yield takeLatest(FETCH_TODO, workerFetchSaga)
}
export function* workerFetchSaga() {
  try {
    const res = yield axios({
      method: 'GET',
      url: ROOT_URL
    })
    if (res.status ===200) {
      yield put({type: FETCH_TODO_SUCCESS, payload:res})
    }
  } catch(err) {
    yield put( {type: FETCH_TODO_FAILURE, payload: err})
  }
}