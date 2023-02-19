import { configureStore } from '@reduxjs/toolkit';
import { usersReduser } from './users/users.slice';

export const store = configureStore({
  reducer: { users: usersReduser },
});
