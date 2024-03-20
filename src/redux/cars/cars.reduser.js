import { createSlice } from '@reduxjs/toolkit';

const { fetchCars } = require('./operations');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
};

const carsSlise = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder =>
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = [...payload];
    }),
});

export const carsReduser = carsSlise.reducer;
