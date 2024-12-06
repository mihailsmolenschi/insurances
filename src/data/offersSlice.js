import { createSlice } from "@reduxjs/toolkit";
import fetchThunk from "../utils/fetchThunk";

export const fetchOffers = fetchThunk(
  "offers/fetchOffers",
  "http://localhost:3000/offers"
);

const offersSlice = createSlice({
  name: "offers",
  initialState: {
    offers: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default offersSlice.reducer;
