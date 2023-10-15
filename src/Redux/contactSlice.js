import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactSliceReducer = contactSlice.reducer;
