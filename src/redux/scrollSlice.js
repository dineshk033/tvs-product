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
      state.filterData = state.filterData.filterData(
        (item) => item.id === action.payload
      );
      return state;
    },
  },
});

export const { getById } = scrollSlice.actions;
export default scrollSlice.reducer;
