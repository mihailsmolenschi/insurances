import { createSlice } from "@reduxjs/toolkit";
import fetchThunk from "../utils/fetchThunk";

export const fetchInsurances = fetchThunk(
  "insurances/fetchInsurances",
  "http://localhost:3000/insurances"
);

const insuranceSlice = createSlice({
  name: "insurance",
  initialState: { insurances: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsurances.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchInsurances.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = action.payload;
      })
      .addCase(fetchInsurances.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default insuranceSlice.reducer;
