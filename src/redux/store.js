import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./scrollSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    ///scroll reducer,account reducer....
    scrolls: scrollReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
