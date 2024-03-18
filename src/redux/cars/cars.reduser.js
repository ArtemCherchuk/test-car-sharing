import { createSlice } from '@reduxjs/toolkit';

const { fetchCars, fetchCarsId } = require('./operations');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  itemId: null,
  page: 1,
  limit: 12,
};

const carsSlise = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchCarsId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.itemId = payload;
      }),
});

export const carsReduser = carsSlise.reducer;
