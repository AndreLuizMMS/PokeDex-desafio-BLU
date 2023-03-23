import axios from 'axios';

const getPokemonAbilitieById = async (id, setState) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setState(res.data.abilities))
    .catch(err => console.log(err));
};

export default getPokemonAbilitieById;

export const getAbilitieSpecs = async (url, setState) => {
  await axios
    .get(url)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};
