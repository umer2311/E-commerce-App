import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  status: 'idle',
  items: [],
};

const addToCart = createAsyncThunk('cart/addToCart',(item) => {
    
   
    console.log("cart slice",item)
    return item;
  });






export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=[...state.items,action.payload]
        console.log(state.items.length)
      })
      
  },
});



export const selectItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;
export {addToCart};
export default cartSlice.reducer;