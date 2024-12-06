import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMenuOpen: false,
    isModalOpen: false,
    isSigningUp: false,
    isLoggingIn: false,
    currentTab: 1,
    isAccordionOneCollapsed: false,
    isAccordionTwoCollapsed: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    openSignUp: (state) => {
      state.isSigningUp = true;
    },
    closeSignUp: (state) => {
      state.isSigningUp = false;
    },
    closeLogin: (state) => {
      state.isLoggingIn = false;
    },
    openLogin: (state) => {
      state.isLoggingIn = true;
    },
    incremetTab: (state) => {
      state.currentTab += 1;
    },
    decrementTab: (state) => {
      state.currentTab -= 1;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    toggleAccordionOne: (state) => {
      state.isAccordionOneCollapsed = !state.isAccordionOneCollapsed;
    },
    toggleAccordionTwo: (state) => {
      state.isAccordionTwoCollapsed = !state.isAccordionTwoCollapsed;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  toggleModal,
  openSignUp,
  closeSignUp,
  closeLogin,
  openLogin,
  incremetTab,
  decrementTab,
  setCurrentTab,
  toggleAccordionOne,
  toggleAccordionTwo,
} = uiSlice.actions;
export default uiSlice.reducer;
