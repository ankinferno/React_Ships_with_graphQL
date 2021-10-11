import { createSlice } from "@reduxjs/toolkit";

export const shipSlice = createSlice({
  name: "ship",
  initialState: {
    value: {}
  },
  reducers: {
    insertShipData: (state, action) => {
      state.value = action.payload.data;
    }
  }
});

//THESE ARE REDUCERS AND Actions combined. A new style sourced from official website of react-redux
// Action creators are generated for each case reducer function
export const { insertShipData } = shipSlice.actions;

export default shipSlice.reducer;
