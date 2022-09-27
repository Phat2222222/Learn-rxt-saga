import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import pageReducer from "store/pageSlice";
import studentReducer from "store/studentSlice";
const sagaMiddleware = createSagaMiddleware(); //
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), //
  devTools: true,
});
sagaMiddleware.run(rootSaga); //
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
