import { createSlice } from "@reduxjs/toolkit";

const initialization = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialization,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrementByValue: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
