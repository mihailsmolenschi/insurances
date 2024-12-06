import { createSlice } from "@reduxjs/toolkit";
import fetchThunk from "../utils/fetchThunk";

export const fetchVehicles = fetchThunk(
  "vehicles/fetchVehicles",
  "http://localhost:3000/vehicles"
);

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default vehiclesSlice.reducer;
