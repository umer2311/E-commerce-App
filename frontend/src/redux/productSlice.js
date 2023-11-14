
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  productID:[],
  category:[],
  trending:[],
  price:[],
  rating:[],
  brand:[],
  loading: false,
  error: null,
};
const fetchTrending = createAsyncThunk('fetchProduct/fetchTrending', async () => {
  const response = await axios.get('http://localhost:3500/userProduct/getTrendingProduct');
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);

const fetchCategory = createAsyncThunk('fetchProduct/fetchCategory', async (category) => {
  const response = await axios.get(`http://localhost:3500/userProduct/getByCategory/${category}`);
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);

const fetchPrice = createAsyncThunk('fetchProduct/fetchPrice', async (price) => {
  const response = await axios.get(`http://localhost:3500/userProduct/getByPrice/${price}`);
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);

const fetchRating = createAsyncThunk('fetchProduct/fetchRating', async (rating) => {
  const response = await axios.get(`http://localhost:3500/userProduct/getByRating/${rating}`);
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);

const fetchBrand = createAsyncThunk('fetchProduct/fetchBrand', async (brand) => {
  const response = await axios.get(`http://localhost:3500/userProduct/getByBrand/${brand}`);
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);


const fetchProducts = createAsyncThunk('fetchProduct/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3500/userProduct/getAllProducts');
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);

const fetchProductId= createAsyncThunk('fetchProduct/fetchProductId', async (id) => {
  const response = await axios.get(`http://localhost:3500/userProduct/getProductByid/${id}`);
  console.log('data is loading in thunk wale me')
  console.log(response.data)
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
        state.product = action.payload;
      })
      .addCase(fetchProductId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductId.fulfilled, (state, action) => {
        state.loading = false;
        state.productID = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.product = [...state.product, action.payload];
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.product = state.product.filter(item => item.id !== action.payload); 
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProductIndex = state.product.findIndex(item => item._id === action.payload._id);
        if (updatedProductIndex !== -1) {
          state.product[updatedProductIndex] = action.payload;
        }
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brand = action.payload;
      })
      .addCase(fetchRating.fulfilled, (state, action) => {
        state.loading = false;
        state.rating = action.payload;
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.price = action.payload;
      })
  },
});


export { fetchProductId,fetchProducts,addProduct,deleteProduct,updateProduct,fetchTrending ,fetchCategory,fetchBrand,fetchRating,fetchPrice};


export default productSlice.reducer;
