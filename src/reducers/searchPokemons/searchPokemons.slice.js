import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  homePreview: [],
  currentSearched: null
};

const searchPokemonsSlice = createSlice({
  name: 'searchPokemons',
  initialState,
  reducers: {
    previewLoaded(state, action) {
      return {
        currentSearched: null,
        homePreview: action.payload
      };
    },
    currentSearchedPokemon(state, action) {
      state.currentSearched = action.payload;
      state.homePreview = [];
    }
  }
});

export const { previewLoaded, currentSearchedPokemon } = searchPokemonsSlice.actions;

export default searchPokemonsSlice.reducer;

export const loadHomePreview = async dispatch => {
  const randomPage = Math.floor(Math.random() * 900) + 1;
  const req = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${randomPage}`)
    .then(res => res.data)
    .catch(err => new Error(err));
  dispatch(previewLoaded(req.results));
};

export const searchForPokemon = async (nameOrId, dispatch) => {
  const req = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then(res => res.data)
    .catch(err => console.log(err));
  // console.log(req);
  dispatch(currentSearchedPokemon(req));
};
