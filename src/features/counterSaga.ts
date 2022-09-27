import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

export function* log(action: PayloadAction) {
  
}

export default function* counterSaga() {
  
  yield takeEvery("*",log); // all changed action 
}
