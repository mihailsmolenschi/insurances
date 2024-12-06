import { createSlice } from "@reduxjs/toolkit";

const userSelection = createSlice({
  name: "userSelection",
  initialState: {
    tabs: {
      vehicle: {},
      model: {},
      marketPrice: {},
      finalPrice: {},
    },
  },
  reducers: {
    updateVehicle: (state, action) => {
      state.tabs.vehicle = action.payload;
    },
    updateModel: (state, action) => {
      state.tabs.model = action.payload;
    },
    updateMarketPrice: (state, action) => {
      state.tabs.marketPrice = action.payload;
    },
    updateFinalPrice: (state, action) => {
      state.tabs.finalPrice = action.payload;
    },
  },
});

export const {
  updateVehicle,
  updateModel,
  updateMarketPrice,
  updateFinalPrice,
} = userSelection.actions;

export default userSelection.reducer;
