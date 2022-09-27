import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models/students";

interface StateProps {
  masthead: string
  list: Student[]
}

const initialState: StateProps = {
  masthead: "dashboard",
  list: []
};

export const slice = createSlice({
  name: "page",
  initialState,

  reducers: {
    changeMasthead: (state, action) => {
      state.masthead = action.payload;
    },

    // setIsLogin: (state, action) => {
    //   state.isLogin = action.payload
    // },
  },
});

export const { changeMasthead } = slice.actions;

export const masthead = (state: RootState) => state.page.masthead;

export default slice.reducer;
