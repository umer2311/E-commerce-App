import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};


const fetchUserData = createAsyncThunk('fetchData/fetchUserData', async (headers) => {
  const response = await axios.get('http://localhost:3500/user/getAllUser',{headers:headers});
  console.log('data is loading in thunk wale me')
  console.log(response)
  return response.data;
  }
);


const addUserData = createAsyncThunk('fetchData/addUserData', async (data) => {
    const response = await axios.post('http://localhost:3500/user/signUp', data);
    return response.data;
  }
);


const deleteUserData = createAsyncThunk(
  'fetchData/deleteUserData',
  async ({id,headers}) => {
    await axios.delete(`http://localhost:3500/user/deleteUserByid/${id}`,{headers:headers}); 
    return id;
  }
);


const   updateUserData = createAsyncThunk(
  'fetchData/updateUserData',
  async ({ id, updatedData,headers }) => {
    const response = await axios.put(`http://localhost:3500/user/updateUserAdmin/${id}`, updatedData,{headers:headers});
    return response.data;
  }
);


const userSlice = createSlice({
  name: 'fetchData',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload); 
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        const updatedUserIndex = state.data.findIndex(item => item._id === action.payload._id);
        if (updatedUserIndex !== -1) {
          state.data[updatedUserIndex] = action.payload;
        }
      })
  },
});


export { fetchUserData, addUserData, deleteUserData, updateUserData };


export default userSlice.reducer;
