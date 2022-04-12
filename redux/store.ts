import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import todoslice from "./todoslice";
const store = configureStore({
  reducer: { todos: todoslice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
