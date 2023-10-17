import { configureStore } from '@reduxjs/toolkit';
import contactSliceReducer from './contactSlice';
import filterSliceReducer from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filter: filterSliceReducer,
  },
});
