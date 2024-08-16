import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
});

export default contactSlice.reducer;
