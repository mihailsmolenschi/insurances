import { createAsyncThunk } from "@reduxjs/toolkit";

export default function fetchThunk(typePrefix, url) {
  return createAsyncThunk(typePrefix, async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch offers");
    }
    return await response.json();
  });
}
