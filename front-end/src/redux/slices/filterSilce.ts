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
  isFiltered: false,
  loading: false,
  error: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload
      state.isFiltered = true
    },
    resetFilterOptions: (state) => {
      state.selectedOptions = []
      state.isFiltered = false
    },

  }
})
export const { resetFilterOptions, setSelectedOptions } = filterSlice.actions
export default filterSlice.reducer