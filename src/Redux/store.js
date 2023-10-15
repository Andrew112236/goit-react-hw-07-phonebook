import { configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from '../Redux/contactSlice';
import filterSliceReducer from '../Redux/Filter';

const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filter: filterSliceReducer,
  },
});

export default store;
