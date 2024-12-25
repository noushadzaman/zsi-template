import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  });
};
