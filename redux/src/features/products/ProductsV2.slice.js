import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const productsV2Slice = createSlice({
  name: "productsV2",
  initialState,
  reducers: {
    getProducts: (state) => {
      console.log("3. Request recieved inside getProducts slice");
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getProductsFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
  productsV2Slice.actions;

export default productsV2Slice.reducer;