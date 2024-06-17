import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';
import type { RootState } from '../store';

const getFavRecipe = createAsyncThunk(
  'GET_FAV_RECIPE',
  async (__, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const result = await axiosInstance.get('/favorites', {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });
    return result.data.favorites;
  }
);

export default getFavRecipe;
