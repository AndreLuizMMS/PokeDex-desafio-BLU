import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadHomePreview } from '../../reducers/searchPokemons/searchPokemons.slice';

import Searchbar from '../../components/search-bar/Searchbar';
import PokemonList from '../../components/pokemon-list/PokemonList';
import GenerateRandom from '../../components/generate-random/GenerateRandom';

import './home-page.scss';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadHomePreview(dispatch);
  }, []);

  return (
    <>
      <div className="homePage-container">
        <div className="search-container">
          <Searchbar />
          <GenerateRandom />
          <PokemonList />
        </div>
      </div>
      <div className="bg"></div>
    </>
  );
};

export default HomePage;
