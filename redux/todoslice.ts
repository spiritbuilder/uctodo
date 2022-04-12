import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";
import { Todo } from "../interfaces";

export type todosState = Todo[];

const initialState: todosState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    initializeTodos: (state, action: PayloadAction<Todo[] | []>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      let stateCopy = [...state];
      stateCopy.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(stateCopy));
      return stateCopy;
    },

    toggleStatus: (state, action: PayloadAction<number>) => {
      let status = state[action.payload].status;

      if (status === "completed") {
        status = "open";
      } else {
        status = "completed";
      }
      state[action.payload].status = status;

      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleStatus, initializeTodos } = todoSlice.actions;

export const selecttodo = (state: RootState) => state;

export default todoSlice.reducer;
