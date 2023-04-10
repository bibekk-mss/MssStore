import { all, fork } from 'redux-saga/effects';
import { productSagas } from './productSagas';
import { userSagas } from './userSaga';
export default function* rootSaga() {
  yield all([...productSagas, ...userSagas]);
}

// function* rootSaga() {
// *  yield all([
// *  fork(productSagas),
// *  fork(userSagas)
// *  ])
// }