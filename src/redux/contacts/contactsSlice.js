import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
};

export const contactsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addContact(state, action) {
      state.entities.push(action.payload);
    },
    deleteContact(state, action) {
      state.entities = state.entities.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSelector = (state) => state.contacts.entities;
export const contactsReducer = contactsSlice.reducer;
