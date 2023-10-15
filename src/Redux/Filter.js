import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
export default filterReducer;
