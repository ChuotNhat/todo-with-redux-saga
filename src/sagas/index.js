import {fork, all} from 'redux-saga/effects'
import { watcherAddSaga } from './sagaAdd'
import { watcherFetchSaga } from './fetchApi'
import { watcherDeleteSaga } from './deleteTodo'
export function* rootSaga() {
  yield all([
    fork(watcherAddSaga),
    fork(watcherFetchSaga),
    fork(watcherDeleteSaga)
  ])
}