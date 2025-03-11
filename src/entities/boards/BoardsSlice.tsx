import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "./types";

const initialState: IBoard[] = []

export const BoardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});
