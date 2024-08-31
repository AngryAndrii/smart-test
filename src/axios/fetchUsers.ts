import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/users';

const URL:string = 'https://jsonplaceholder.typicode.com/users/'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
  const response = await axios.get<User[]>(URL);
  return response.data;
  } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
});