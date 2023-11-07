
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};








const fetchProducts = createAsyncThunk('fetchProduct/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3500/userProduct/getAllProducts');
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);


const addProduct = createAsyncThunk('fetchProduct/addUserData', async ({form,headers}) => {
    const response = await axios.post('http://localhost:3500/userProduct/createProduct', form,{headers:headers});
    return response.data;
  }
);


const deleteProduct = createAsyncThunk(
  'fetchProduct/deleteProduct',
  async (id) => {
    await axios.delete(`http://localhost:3500/userProduct/deleteProduct/${id}`); 
    return id;
  }
);


const   updateProduct = createAsyncThunk(
  'fetchProduct/updateProduct',
  async ({ id, updatedData}) => {
    const response = await axios.put(`http://localhost:3500/userProduct/updateProduct/${id}`, updatedData,{headers:headers});
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'fetchProduct',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload); 
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProductIndex = state.data.findIndex(item => item._id === action.payload._id);
        if (updatedProductIndex !== -1) {
          state.data[updatedProductIndex] = action.payload;
        }
      })
  },
});


export { fetchProducts,addProduct,deleteProduct,updateProduct };


export default productSlice.reducer;
