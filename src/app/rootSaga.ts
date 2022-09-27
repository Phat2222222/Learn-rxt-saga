import counterSaga from "features/counterSaga";
import { all } from "redux-saga/effects";
function* helloSaga() {
  
}
export default function* rootSaga() {
  
  yield all([helloSaga(), counterSaga()]);
}
