import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};
// nuestro contador , incremenda de 1 en 1 , decementa de igual forma y incrementa por el valor que le ingrese el cliente o usuario 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;