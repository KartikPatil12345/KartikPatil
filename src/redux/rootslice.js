import { createSlice } from "@reduxjs/toolkit";

const rootslice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducer: {
    ShowLoading: (state, action) => {
      state.loading = true;
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export default rootslice.reducer;
export const {ShowLoading, HideLoading,SetPortfolioData}=rootslice.actions;
