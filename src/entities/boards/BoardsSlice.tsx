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
      const boardId = JSON.stringify(Math.random());

      const boardFields = {
        id: boardId,
        name: action.payload.name,
        columns: [],
        executors: [],
      };

      if (state.boards.length === 0) {
        state.activeBoardId = boardId;
      }

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
    setActiveBoard(state, action) {
      state.activeBoardId = action.payload;
    },
  },
});
