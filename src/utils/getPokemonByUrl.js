import axios from 'axios';

const getPokemonByUrl = async (url, setState) => {
  await axios
    .get(url)
    .then(res => setState(res.data))
    .catch(err => console.log(err));
};

export default getPokemonByUrl;
