import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

const imageIndexSlice = createSlice({
  name: "imageIndex",
  initialState,
  reducers: {
    forward: (state) => {
      state.index = state.index + 1 !== 3 ? state.index + 1 : 0;
    },
    backward: (state) => {
      state.index = state.index - 1 !== -1 ? state.index - 1 : 2;
    },
  },
});

export default imageIndexSlice.reducer;
export const { forward, backward } = imageIndexSlice.actions;
