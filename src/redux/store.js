import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./scrollSlice";
export const store = configureStore({
  reducer: {
    ///scroll reducer,account reducer....
    scrolls: scrollReducer,
  },
});
