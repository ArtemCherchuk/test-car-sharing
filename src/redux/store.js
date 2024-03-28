import { configureStore } from '@reduxjs/toolkit';
import { carsReduser } from './cars/cars.reduser';
import { modalReducer } from './modal/modal.reduser';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteItems'],
};

export const store = configureStore({
  reducer: {
    carsStore: persistReducer(persistConfig, carsReduser),
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
