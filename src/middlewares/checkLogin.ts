import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { addTokenToAxiosInstance } from '../axios/axios';
import type { RootState } from '../store/index';
import { addValuesToStorage } from '../localStorage/localStorage';

const checkLogin = createAsyncThunk('CHECK_LOGIN', async (__, trunkAPI) => {
  const state = trunkAPI.getState() as RootState;
  const { email, password } = state.user.logins;
  const result = await axiosInstance.post('/login', {
    email,
    password,
  });
  addTokenToAxiosInstance(result.data.token);
  addValuesToStorage(result.data.token, result.data.pseudo);

  return { pseudo: result.data.pseudo, token: result.data.token };
});

export default checkLogin;
