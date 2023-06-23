import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOptions: []
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