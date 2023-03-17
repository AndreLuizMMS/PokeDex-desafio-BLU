import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from '../pokemonCard/PokemonCard';

import './pokemon-list.scss';

const PokemonList = () => {
  
  const preview = useSelector(state => state.searchPokemons.homePreview);

  return (
    <div className="pokemon-list-container">
      {preview.length ? (
        preview.map((p, i) => <PokemonCard key={i} url={p.url} />)
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default PokemonList;
