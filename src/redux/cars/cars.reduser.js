import { createSlice } from '@reduxjs/toolkit';

const { fetchCars, fetchCarsAll } = require('./operations');

const initialState = {
  items: [],
  allItems: [],
  favoriteItems: [],
  isLoading: false,
  error: null,
  filter: '',
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
    filterValue: (state, { payload }) => {
      state.filter = payload;
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
      })
      .addCase(fetchCarsAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allItems = payload;
      })
      .addCase(fetchCarsAll.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetItems, addFavorite, removeFavorite, filterValue } =
  carsSlise.actions;
export const carsReduser = carsSlise.reducer;
