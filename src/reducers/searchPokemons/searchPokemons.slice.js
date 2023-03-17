import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  homePreview: [],
  currentPokemon: []
};

const searchPokemonsSlice = createSlice({
  name: 'searchPokemons',
  initialState,
  reducers: {
    previewLoaded(state, action) {
      console.log(state.homePreview.length);
      if (!!state.homePreview.length) {
        return {
          currentPokemon: [],
          homePreview: action.payload
        };
      } else {
        return {
          currentPokemon: [],
          homePreview: action.payload
        };
      }
    },
    currentSearchedPokemon(state, action) {
      return {
        homePreview: [],
        currentPokemon: action.payload
      };
    }
  }
});

export const { previewLoaded, currentSearchedPokemon } = searchPokemonsSlice.actions;

export default searchPokemonsSlice.reducer;

export const loadHomePreview = async dispatch => {
  const randomPage = Math.floor(Math.random() * 1000) + 1;
  const req = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${randomPage}`)
    .then(res => res.data)
    .catch(err => new Error(err));
  console.log(req.results);
  dispatch(previewLoaded(req.results));
};

export const searchForPokemon = async (nameOrId, dispatch) => {
  const req = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {});
  dispatch(currentSearchedPokemon(req));
};
