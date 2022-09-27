import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import Students from "pages/students";
import { Student } from "models/students";
import { ListParams, PaginationResponse } from "models/common";
import { StatHelpText } from "@chakra-ui/react";

interface Pros {
  list: Student[];
  pagination: PaginationResponse | null;
  params: ListParams;
}
const initialState: Pros = {
  list: [],
  pagination: null,
  params: {
    _page: 1,
    _limit: 5,
    _sort: "",
    _order: "asc",
    // [key: string]: "sss";
  },
};
export const slice = createSlice({
  name: "student",
  initialState,

  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },

    setParams: (state, action) => {
      state.params = action.payload;
    },
    // setIsLogin: (state, action) => {
    //   state.isLogin = action.payload
    // },
  },
});
export const { setList, setPagination,setParams } = slice.actions;

export const list = (state: RootState) => state.student.list;
export const pagination = (state: RootState) => state.student.pagination;
export const params = (state: RootState) => state.student.params;
export default slice.reducer;
