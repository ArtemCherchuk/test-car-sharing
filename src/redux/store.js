import { configureStore } from '@reduxjs/toolkit';
import { carsReduser } from './cars/cars.reduser';
import { modalReducer } from './modal/modal.reduser';

export const store = configureStore({
  reducer: {
    carsStore: carsReduser,
    modal: modalReducer,
  },
});
