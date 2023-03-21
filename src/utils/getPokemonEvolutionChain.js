import axios from 'axios';

const getPokemonEvolutionChain = async (id, setState) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(res => setState(res.data.evolution_chain))
    .catch(err => console.log(err));
};

export default getPokemonEvolutionChain;
