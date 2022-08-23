import counterSaga from "features/counterSaga";
import { all } from "redux-saga/effects";
function* helloSaga() {
  console.log("hello Saga");
}
export default function* rootSaga() {
  console.log("ok");
  yield all([helloSaga(), counterSaga()]);
}
