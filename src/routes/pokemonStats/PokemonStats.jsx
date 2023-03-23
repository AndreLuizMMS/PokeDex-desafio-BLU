import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PokemonStatsInfo from '../../components/pokemon-stats/pokemon-stats-info/PokemonStatsInfo';
import EvolutionCard from '../../components/pokemon-stats/evolution-card/EvolutionCard';
import SpecsRoutes from '../../components/pokemon-stats/specs-routes/SpecsRoutes';
import AddToPokedex from '../../components/pokemon-stats/add-to-pokedex/AddToPokedex';

import getPokemonByIdOrName from '../../utils/getPokemonByIdOrName';

import './pokemon-stats.scss';

const PokemonStats = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemonByIdOrName(id, setPokemon);
  }, []);

  return <>{pokemon ? <Stats pokemon={pokemon} /> : <h1>loading</h1>}</>;
};

export default PokemonStats;

const Stats = ({ pokemon }) => {
  return (
    <div className="pokemon-stats-background">
      <div className="pokemon-stats-container">
        <PokemonStatsInfo pokemon={pokemon} />
        <EvolutionCard />
        <SpecsRoutes pokemon={pokemon} />
        <AddToPokedex />
      </div>
    </div>
  );
};
