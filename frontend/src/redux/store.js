import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"
import userReducer from "./userSlice"
import productReducer from "./productSlice"

const thunkStore = configureStore({
  reducer: {
    login: loginReducer,
    data: userReducer,
    product:productReducer
  },
});

export default thunkStore;