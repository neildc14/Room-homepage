import { configureStore } from "@reduxjs/toolkit";
import navToggleSlice from "../features/navToggleSlice";

const store = configureStore({
  reducer: {
    navToggle: navToggleSlice,
  },
});

export default store;
