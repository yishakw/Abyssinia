import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicesHoverState: false,
  cardHoverState: false,
  ProjectCardState: {},
};

const hoverSlice = createSlice({
  name: "hovered",
  initialState,
  reducers: {
    serviceH: (state) => {
      state.servicesHoverState = !state.servicesHoverState;
    },
    cardH: (state) => {
      state.cardHoverState = !state.cardHoverState;
    },
    projectH: (state, action) => {
      const cardId = action.payload;
      state.ProjectCardState[cardId] = !state.ProjectCardState[cardId];
    },
  },
});

export const { serviceH, cardH, projectH } = hoverSlice.actions;
export default hoverSlice.reducer;
