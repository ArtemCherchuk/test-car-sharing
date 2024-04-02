import { createSelector } from '@reduxjs/toolkit';

export const selectCarsList = state => state.carsStore.items;
export const selectCarsListAll = state => state.carsStore.allItems;
export const selectIsLoading = state => state.carsStore.isLoading;
export const selectFavoriteItems = state => state.carsStore.favoriteItems;
export const selectFilter = state => state.carsStore.filter;

export const selectVisibleItems = createSelector(
  [selectCarsListAll, selectFilter],
  (cars, filter) => {
    return cars.filter(car =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
