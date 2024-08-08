import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  valu: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.valu += 1;
    },
    decrementByAmount: (state, action) => {
      state.valu -= action.payload;
    },
  },
});

export const { increment, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
