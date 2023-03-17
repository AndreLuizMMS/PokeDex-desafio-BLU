import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchForPokemon } from '../../reducers/searchPokemons/searchPokemons.slice';

import './search-bar.scss';

const Searchbar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const hanldeSearch = e => {
    e.preventDefault();

    if (!text) {
      return;
    }
    searchForPokemon(text, dispatch);
    setText('');
  };

  const handleChange = e => setText(e.target.value);

  return (
    <form onSubmit={hanldeSearch}>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Nome ou n°"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Achar</button>
      </div>
    </form>
  );
};

export default Searchbar;
