import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.goit.global/";
const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
});
