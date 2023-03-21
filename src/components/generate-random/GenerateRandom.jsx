import { useDispatch } from 'react-redux';

import { loadHomePreview } from '../../reducers/searchPokemons/searchPokemons.slice';

import './generate-random.scss';

const GenerateRandom = () => {
  const dispatch = useDispatch();

  function randomPokemons() {
    loadHomePreview(dispatch);
  }

  return (
    <button className="random-btn" onClick={randomPokemons}>
      Random
    </button>
  );
};

export default GenerateRandom;
