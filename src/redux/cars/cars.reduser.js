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
    removeFavorite: (state, { payload }) => {
      const index = state.favoriteItems.findIndex(item => item.id === payload);

      state.favoriteItems.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload];
      })
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetItems, addFavorite, removeFavorite } = carsSlise.actions;
export const carsReduser = carsSlise.reducer;
