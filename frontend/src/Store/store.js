import { configureStore } from "@reduxjs/toolkit";
import loginRecucer from "./testSlice.js";

const store = configureStore({
  reducer: {
    login: loginRecucer,
  },
});

export default store;
