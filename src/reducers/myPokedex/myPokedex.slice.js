import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const myPokedexSlice = createSlice({
  name: 'myPokedex',
  initialState,
  reducers: {

  }
});

export const { test } = myPokedexSlice.actions;
export default myPokedexSlice.reducer;
