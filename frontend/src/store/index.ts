import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import labReducer from './slices/labSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lab: labReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 