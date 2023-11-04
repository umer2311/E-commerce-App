import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"
import userReducer from "./userSlice"

const thunkStore = configureStore({
  reducer: {
    login: loginReducer,
    data: userReducer
  },
});

export default thunkStore;