import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    contactsReducer: contactsReducer,
    auth: authReducer,
  },
});