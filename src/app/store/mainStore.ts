import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BoardsSlice } from "../../entities/boards/BoardsSlice";

const reducers = combineReducers({
  boards: BoardsSlice.reducer,
});

export const mainStore = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof mainStore.dispatch
export type RootState = ReturnType<typeof mainStore.getState>;
