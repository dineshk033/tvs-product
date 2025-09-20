import { createSlice } from "@reduxjs/toolkit";
import { fetchScrollsData } from "./custom-async";

const initialState = {
  originalData: [],
  filterData: [],
  loading: false,
  error: "",
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
    toggleSpinner: (state) => {
      state.loading = !state.loading;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchScrollsData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.filterData = [];
    });
    builder.addCase(fetchScrollsData.fulfilled, (state, action) => {
      state.loading = false;
      state.filterData = action.payload;
    });
    builder.addCase(fetchScrollsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { getById, fetchData, toggleSpinner } = scrollSlice.actions;
export default scrollSlice.reducer;
