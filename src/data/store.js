import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import offersReducer from "./offersSlice";
import insurancesReducer from "./insurancesSlice";
import vehiclesReducer from "./vehicleSlice";
import userSelectionReducer from "./userSelectionSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    offers: offersReducer,
    insurances: insurancesReducer,
    vehicles: vehiclesReducer,
    userSelection: userSelectionReducer,
  },
});

export default store;
