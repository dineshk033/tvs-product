import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalData: [],
  filterData: [],
};

const scrollSlice = createSlice({
  name: "scrolls",
  initialState,
  reducers: {
    getById: (state, action) => {
      state.filterData = state.filterData.filter(
        (item) => item.id === action.payload
      );
      return state;
    },
    fetchData: (state, action) => {
      state.filterData = action.payload;
      state.originalData = action.payload;
      return state;
    },
  },
});

export const { getById, fetchData } = scrollSlice.actions;
export default scrollSlice.reducer;
