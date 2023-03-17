import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { loadHomePreview } from './reducers/searchPokemons/searchPokemons.slice';

import Header from './components/header/Header';
import HomePage from './routes/homePage/HomePage';
import PokemonStats from './routes/pokemonStats/PokemonStats';

import './global.scss';

function App() {
  const global = useSelector(state => state);
  console.log(global);                  
  // console.log('rodou');

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokemonstats/:id" element={<PokemonStats />} />
      </Routes>
    </>
  );
}

export default App;
