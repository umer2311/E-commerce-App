import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const signupUser = createAsyncThunk('signupUser/signupUser', async (data) => {
  console.log("first");
  const response = await axios.post('http://localhost:3500/user/signUp', data);
  console.log('User Added Successfully');
  return response.data;
});

const loginUser = createAsyncThunk('loginUser/loginUser', async (data) => {
  try {
    const response = await axios.post('http://localhost:3500/user/logIn', data);

    const { token, user } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    return user; // Return user data on successful login
  } catch (error) {
    console.error('Login failed:', error.response.data.error);
    throw error; // Throw an error for unsuccessful login
  }
});

const loginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { signupUser, loginUser };
export default loginSlice.reducer;