import { createSlice, nanoid } from '@reduxjs/toolkit';

// initial state
const contactInitialState = {
  items: [
    { id: nanoid(7), name: 'Andrew Marchel', number: '459-12-56' },
    { id: nanoid(7), name: 'Emanuel Francois', number: '443-89-12' },
    { id: nanoid(7), name: 'Adonis Silviu', number: '645-17-79' },
    { id: nanoid(7), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'phoneBookMark',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        state.contacts.isLoading = false;
      },
      prepare(name, number) {
        const contact = {
          id: nanoid(7),
          name,
          number,
        };
        return {
          payload: contact,
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.contacts.isLoading = false;
        state.contacts.error = null;
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {},
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactSliceReducer = contactSlice.reducer;
export const getContacts = state => state.phoneBookMark.items;
export const getFilter = state => state.phoneBookMark.filter;