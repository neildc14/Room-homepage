import { configureStore } from "@reduxjs/toolkit";
import navToggleSlice from "../features/navToggleSlice";
import imageIndexSlice from "../features/imageIndexSlice";

const store = configureStore({
  reducer: {
    navToggle: navToggleSlice,
    imageIndex: imageIndexSlice,
  },
});

export default store;
