import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const navToggleSlice = createSlice({
  name: "toggleNav",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export default navToggleSlice.reducer;
export const { setToggle } = navToggleSlice.actions;
