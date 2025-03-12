import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "./types";

type TInitialState = {
  boards: IBoard[];
  activeBoardId: string;
}

const initialState: TInitialState = {
  boards: [],
  activeBoardId: ''
}

export const BoardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});
