import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "./types";

type TInitialState = {
  boards: IBoard[];
  activeBoardId: string;
};

const initialState: TInitialState = {
  boards: [],
  activeBoardId: "",
};

export const BoardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    createBoard(state, action) {
      const boardFields = {
        id: action.payload.id,
        name: action.payload.name,
        columns: [],
        executors: [],
      };

      state.boards.push(boardFields);
    },
    updateBoard(state, action) {
      state.boards = state.boards.map((board) => {
        if (board.id === action.payload.id) {
          return {
            ...board,
            ...action.payload,
          };
        }

        return board;
      });
    },
  },
});
