import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosRequest,axiosMethod } from '../utils/util';
export const loadStatus = {
    None: 0,
    Loading: 1,
    Success: 2,
    Failed: 3
  }
  export const sendComment = createAsyncThunk('comment/send', async (params, { rejectWithValue }) => {
    try {
      const response = await axiosRequest('/get-countries',axiosMethod.POST, );
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  });

export const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {},
    extraReducers: {}
})

export default dataSlice.reducer;