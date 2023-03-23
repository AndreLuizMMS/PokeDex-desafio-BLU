import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Plus } from '@phosphor-icons/react';

import { fetchAndAdd } from '../../../reducers/myPokedex/myPokedex.slice';

import pokeBall from '../../../assets/pokeBall.png';

import './add-to-pokedex.scss';

const AddToPokedex = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleAddPokemon = () => {
    fetchAndAdd(id, dispatch);
  };

  return (
    <div className="add-btn">
      <button className="btn" onClick={handleAddPokemon}>
        <Plus size={46} />
        Adicionar a minha Pokedex
        <img src={pokeBall} alt="" />
      </button>
    </div>
  );
};

export default AddToPokedex;
