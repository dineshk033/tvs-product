import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../api/AxiosInstance";

export const fetchScrollsData = createAsyncThunk(
  "scrolls/fetchScrollsData",
  async () => {
    const response = await AxiosInstance.get(`/scrollData/56640001`);

    return [response.data]; // Array of todos
  }
);
