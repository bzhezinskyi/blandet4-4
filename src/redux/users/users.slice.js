import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addUser,
  deleteUser,
  editUser,
  feachUsers,
  featchUserDetails,
} from './users.operation';

const usersSlise = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null, currentUser: null },
  extraReducers: builder =>
    builder

      .addCase(feachUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.currentUser = null;
      })

      .addCase(featchUserDetails.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })

      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(user => user.id !== payload.id);
        state.currentUser = null;
      })

      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.currentUser = payload;
      })

      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })

      .addMatcher(
        isAnyOf(
          feachUsers.pending,
          featchUserDetails.pending,
          deleteUser.pending,
          addUser.pending,
          editUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          feachUsers.fulfilled,
          featchUserDetails.fulfilled,
          deleteUser.fulfilled,
          addUser.fulfilled,
          editUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          feachUsers.rejected,
          featchUserDetails.rejected,
          deleteUser.rejected,
          addUser.rejected,
          editUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.currentUser = null;
        }
      ),
});

export const usersReduser = usersSlise.reducer;
