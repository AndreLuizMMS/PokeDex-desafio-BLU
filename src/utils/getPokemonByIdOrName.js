import axios from 'axios';

const getPokemonByIdOrName = async (id, setState) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};

export default getPokemonByIdOrName;
