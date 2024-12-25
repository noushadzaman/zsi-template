import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/loginUser", async (obj) => {
  const request = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/user/login`,
    obj
  );
  const response = await request.data.data;
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access denied! Invalid username or password";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
