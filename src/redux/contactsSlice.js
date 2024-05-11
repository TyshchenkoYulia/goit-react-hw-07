import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid/non-secure";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            value: contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
