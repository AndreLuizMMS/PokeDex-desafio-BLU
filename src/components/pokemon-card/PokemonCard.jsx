import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import getPokemonByUrl from '../../utils/getPokemonByUrl';

import './pokemon-card.scss';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemonByUrl(url, setPokemon);
  }, [url]);

  return <>{pokemon ? <Card key={pokemon.id} pokemon={pokemon} /> : null}</>;
};

export const Card = ({ pokemon }) => {
  const { name, id } = pokemon;
  const image = pokemon.sprites.front_shiny;
  const types = pokemon.types.map(t => t.type.name);

  return (
    <div className="pokemon-info-container">
      <Link className="link" to={`/pokemonStats/${id}`}>
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
      </Link>

      <div className="add-btn">
        <button>Capturar</button>
      </div>
    </div>
  );
};

export default PokemonCard;
