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
      state.items = state.items.filter((contact) => {
        contact.id !== action.payload.id;
      });
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
