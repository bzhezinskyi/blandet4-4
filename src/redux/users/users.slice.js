import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, feachUsers, featchUserDetails } from './users.operation';

const usersSlise = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null, currentUser: null },
  extraReducers: builder =>
    builder
      .addCase(feachUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(feachUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(feachUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(featchUserDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(featchUserDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
        state.error = null;
      })
      .addCase(featchUserDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //TODO доробити
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const usersReduser = usersSlise.reducer;
