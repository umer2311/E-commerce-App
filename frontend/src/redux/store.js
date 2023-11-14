import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"

const thunkStore = configureStore({
  reducer: {
    login: loginReducer,
    data: userReducer,
    product:productReducer,
    cart:cartReducer
  },
});

export default thunkStore;