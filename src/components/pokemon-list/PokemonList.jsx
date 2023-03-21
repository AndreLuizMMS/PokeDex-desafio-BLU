import { current } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from '../pokemon-card/PokemonCard';
import { Card } from '../pokemon-card/PokemonCard';

import './pokemon-list.scss';

const PokemonList = () => {
  const preview = useSelector(state => state.searchPokemons.homePreview);
  const currentSearched = useSelector(state => state.searchPokemons.currentSearched);

  return (
    <div className="pokemon-list-container">
      {preview.length ? (
        preview.map((p, i) => <PokemonCard key={i} url={p.url} />)
      ) : !currentSearched ? (
        <h2>loading</h2>
      ) : (
        <Card pokemon={currentSearched} key={currentSearched.id} />
      )}
    </div>
  );
};

export default PokemonList;
