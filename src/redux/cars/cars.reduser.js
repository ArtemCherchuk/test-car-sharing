import { createSlice } from '@reduxjs/toolkit';

const { fetchCars } = require('./operations');

const initialState = {
  items: [],
  favoriteItems: [],
  isLoading: false,
  error: null,
};

const carsSlise = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetItems: state => {
      state.items = [];
    },
    addFavorite: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...payload];
    });
  },
});

export const { resetItems } = carsSlise.actions;
export const carsReduser = carsSlise.reducer;
