import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baceURL = "https://6645f3aeb8925626f893d9c4.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      //   console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", text);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
