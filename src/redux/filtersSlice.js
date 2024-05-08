import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    setFilters(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilters } = slice.actions;
export const filtersReducer = slice.reducer;
