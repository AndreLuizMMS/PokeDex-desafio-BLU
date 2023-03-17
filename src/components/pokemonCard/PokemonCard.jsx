import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import './pokemon-card.scss';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function getPokemon(url) {
      await axios
        .get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err));
    }
    getPokemon(url);
  }, []);

  return (
    <>{pokemon ? <Card key={pokemon.id} pokemon={pokemon} /> : <span>loading</span>}</>
  );
};

const Card = ({ pokemon }) => {
  const { name, id } = pokemon;
  const image = pokemon.sprites.front_shiny;
  const types = pokemon.types.map(t => t.type.name);

  return (
    <div className="pokemon-info-container">
      <div className="info">
        <img src={image} alt="" />

        <div className="text">
          <div className="main-info">
            <span className="name">{name}</span>
            <div className="tipos">
              {types.map((t, i) => {
                return <span key={i}>{t}</span>;
              })}
            </div>
          </div>
          <span className="id">id: {id}</span>
        </div>
      </div>

      <div className="add-btn">
        <button>Capturar</button>
      </div>
    </div>
  );
};

export default PokemonCard;
