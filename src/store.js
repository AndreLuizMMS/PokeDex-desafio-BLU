import { configureStore } from '@reduxjs/toolkit';

import myPokedexReducer from './reducers/myPokedex/myPokedex.slice';
import searchPokemonsReducer from './reducers/searchPokemons/searchPokemons.slice';

const store = configureStore({
  reducer: {
    myPokedex: myPokedexReducer,
    searchPokemons: searchPokemonsReducer
  }
});

export default store;
