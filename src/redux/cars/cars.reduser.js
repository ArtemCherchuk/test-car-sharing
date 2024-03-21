import { createSlice } from '@reduxjs/toolkit';

const { fetchCars } = require('./operations');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
};

const carsSlise = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
      state.total = state.items.length;
    });
  },
});

export const carsReduser = carsSlise.reducer;
