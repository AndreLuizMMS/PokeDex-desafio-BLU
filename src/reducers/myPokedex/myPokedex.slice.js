import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  addedPokemons: [],
  idsAdded: []
};

const myPokedexSlice = createSlice({
  name: 'myPokedex',
  initialState,
  reducers: {
    addPokemon(state, action) {
      const pokemon = action.payload;

      const alreadyAdded = state.idsAdded.find(id => id == pokemon.id);
      if (alreadyAdded) {
        return;
      }

      const { name, id } = pokemon;
      const image = pokemon.sprites.front_shiny;
      const types = pokemon.types.map(t => t.type.name);

      state.addedPokemons.push({ name, id, image, types });
      state.idsAdded.push(id);
    }
  }
});

export const { addPokemon } = myPokedexSlice.actions;
export default myPokedexSlice.reducer;

export const fetchAndAdd = async (id, dispatch) => {
  const req = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));
  dispatch(addPokemon(req));
};
