import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65f1c1ac034bdbecc7639a65.mockapi.io/',
});

export const fetchCars = createAsyncThunk(
  'advert/get',
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`/advert`, {
        params: { page: page, limit: 12 },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsAll = createAsyncThunk(
  'advert/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/advert`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
