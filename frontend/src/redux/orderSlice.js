import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  orders: [],
  
};

const addOrder = createAsyncThunk('order/addOrder',(item) => {
    

  });






export const orderSlicd = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.fulfilled, (state, action) => {
       
        state.items=[...state.orders,action.payload]
       
      })
      
  },
});

export {addOrder};
export default addOrder.reducer;