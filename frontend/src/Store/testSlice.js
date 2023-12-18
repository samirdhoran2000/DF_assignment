import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    login(state, action) {
      console.log("state is ", state, "action is ", action);
      return action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
