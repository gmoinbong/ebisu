import { createSlice } from "@reduxjs/toolkit";
export interface Filter {
  collection: string[];
  price?: string[];
  name: string[];
  category: string[];
  gender: string[];
  color: string[];
  size: string[];
}

const initialState = {
  selectedOptions: {},
  filteredProducts: [],
  loading: false,
  error: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload
    },
    resetFilterOptions: (state) => {
      state.selectedOptions = []
    },

  }
})
export const { resetFilterOptions, setSelectedOptions } = filterSlice.actions
export default filterSlice.reducer