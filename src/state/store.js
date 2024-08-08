import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/counterSlice"
import hoverReducer from "./slices/hoverSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hovered: hoverReducer,
  },
});