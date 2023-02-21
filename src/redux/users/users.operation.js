import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const usersAPI = axios.create({
  baseURL: 'https://63f2260e4f17278c9a213bcd.mockapi.io',
});

export const feachUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
  try {
    const { data } = await usersAPI.get('/users');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const featchUserDetails = createAsyncThunk(
  'user/details',
  async (id, thunkAPI) => {
    try {
      const { data } = await usersAPI.get(`/users/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await usersAPI.delete(`/users/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk('user/add', async (user, thunkAPI) => {
  try {
    const { data } = await usersAPI.post(`/users`, user);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk(
  'user/edit',
  async (user, thunkAPI) => {
    try {
      const { data } = await usersAPI.put(`/users/${user.id}`, user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
