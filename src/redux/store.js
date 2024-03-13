import { configureStore } from '@reduxjs/toolkit';
import { carsReduser } from './cars/cars.reduser';

export const store = configureStore({
  reducer: {
    carsStore: carsReduser,
  },
});
