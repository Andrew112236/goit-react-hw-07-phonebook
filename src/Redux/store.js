import { configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from '../Redux/contactSlice';
import filterReducer from '../Redux/Filter';

const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filter: filterReducer,
  },
});

export default store;
