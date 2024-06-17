import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';

const getRecipe = createAsyncThunk('GET_RECIPE', async () => {
  const result = await axiosInstance.get('/recipes');
  return result.data;
});

export default getRecipe;
