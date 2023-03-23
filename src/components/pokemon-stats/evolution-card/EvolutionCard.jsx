import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import getPokemonEvolutionChain from '../../../utils/getPokemonEvolutionChain'; // returns url

import './evolution-card.scss';

const EvolutionCard = () => {
  const { id } = useParams();
  const [pokemonSpecies, setSpecies] = useState();

  useEffect(() => {
    getPokemonEvolutionChain(id, setSpecies);
  }, []);

  return (
    <>
      {pokemonSpecies ? (
        <Card evolutionChainURL={pokemonSpecies.url} key={id} />
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default EvolutionCard;

const Card = ({ evolutionChainURL }) => {
  const [evolution, setEvolution] = useState();

  useEffect(() => {
    const get = async url => {
      await axios
        .get(url)
        .then(res => setEvolution(res.data))
        .catch(err => console.log(err));
    };

    get(evolutionChainURL);
  }, []);

  if (evolution) {
    if (!evolution.chain.evolves_to.length) {
      return (
        <div className="evolutions">
          <h1>Sem Evoluçoes</h1>
        </div>
      );
    }

    const name1 = evolution.chain?.species.name;
    const name2 = evolution.chain?.evolves_to[0]?.species.name;
    const name3 = evolution.chain?.evolves_to[0]?.evolves_to[0]?.species.name;

    return (
      <div className="evolutions">
        <h1>Evoluções</h1>
        <div className="evolutions-container">
          <Evolution pokemonName={name1} />
          <Evolution pokemonName={name2} />
          <Evolution pokemonName={name3} />
        </div>
      </div>
    );
  }
};

import getPokemonByIdOrName from '../../../utils/getPokemonByIdOrName';

const Evolution = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemonByIdOrName(pokemonName, setPokemon);
  }, []);

  if (pokemon) {
    const { name } = pokemon;
    const types = pokemon.types.map(t => t.type.name);
    const image = pokemon.sprites.front_default;

    return (
      <div className="evolution-specs">
        <img src={image} alt="" />
        <span className="name">{name}</span>
        {types.map((t, i) => {
          return (
            <span key={i} className="tipos">
              {t}
            </span>
          );
        })}
      </div>
    );
  }
};
