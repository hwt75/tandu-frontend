import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/util';

export const loadStatus = {
    None: 0,
    Loading: 1,
    Success: 2,
    Failed: 3
  }

  export const getCountries = createAsyncThunk('countries', async (params, { rejectWithValue }) => {
    try {
      const response = await axiosRequest('/get-countries' );
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  });

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
      countries: [],
      loadCoutriesStatus: loadStatus.None
    },
    reducers: {
      resetLoadCountriesStatus: (state,action)=>{
        state.countries = [];
        state.loadCoutriesStatus = loadStatus.None
      }
    },
    extraReducers:(builder) => {
      builder
      .addCase(getCountries.pending, (state,action)=>{
        console.log(state);
        state.loadCoutriesStatus = loadStatus.Loading;
      })
      .addCase(getCountries.fulfilled, (state,action)=>{
        state.countries = action.payload;
        console.log(state.countries);
        state.loadCoutriesStatus = loadStatus.Success;
      })
      .addCase(getCountries.rejected,(state,action)=>{
        state.countries = [];
        state.loadCoutriesStatus = loadStatus.Failed
      })
    }
})
export const {resetLoadCountriesStatus} = dataSlice.actions;
export default dataSlice.reducer;