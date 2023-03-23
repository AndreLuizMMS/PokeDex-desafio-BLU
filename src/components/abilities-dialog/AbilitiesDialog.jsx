import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import capitalize from '../../utils/capitalize'

import { X } from '@phosphor-icons/react';

import getPokemonAbilitieById, {
  getAbilitieSpecs
} from '../../utils/getPokemonAbilitieById ';

import './abilities-dialog.scss';

const AbilitiesDialog = () => {
  const { id } = useParams();
  const [abilities, setAbilities] = useState();

  useEffect(() => {
    getPokemonAbilitieById(id, setAbilities);
  }, [id]);

  if (abilities) {
    return (
      <div className="abilities-container">
        <h1>Habilidades</h1>
        <div className="abilities">
          {abilities.map((a, i) => (
            <AbilitieCard key={i} abilitie={a} />
          ))}
        </div>
      </div>
    );
  }
};

export default AbilitiesDialog;

const AbilitieCard = ({ abilitie }) => {
  const url = abilitie.ability.url;
  const [abilitieSpec, setAbilitieSpec] = useState();

  useEffect(() => {
    getAbilitieSpecs(url, setAbilitieSpec);
  }, [abilitie]);

  if (abilitieSpec) {
    // console.log(abilitieSpec);

    const { name } = abilitieSpec;
    const short_effect = abilitieSpec.effect_entries.filter(
      eff => eff.language.name == 'en'
    )[0].short_effect;

    return (
      <div className="card-container">
        <h2 className="name">{capitalize(name)}</h2>
        <p className="short-effect">{short_effect}</p>
      </div>
    );
  }
};
