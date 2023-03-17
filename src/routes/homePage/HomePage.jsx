import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadHomePreview } from '../../reducers/searchPokemons/searchPokemons.slice';

import Searchbar from '../../components/searchBar/Searchbar';
import PokemonList from '../../components/pokemonList/PokemonList';
import GenerateRandom from '../../components/generateRandom/GenerateRandom';

import './home-page.scss';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadHomePreview(dispatch);
  }, []);

  return (
    <div className="homePage-container">
      <div className="search-container">
        <Searchbar />
        <GenerateRandom />
        <PokemonList />
      </div>
    </div>
  );
};

export default HomePage;
